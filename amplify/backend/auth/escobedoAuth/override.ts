import {
  AmplifyAuthCognitoStackTemplate,
  AmplifyProjectInfo,
} from '@aws-amplify/cli-extensibility-helper';

export function override(
  resources: AmplifyAuthCognitoStackTemplate,
  amplifyProjectInfo: AmplifyProjectInfo
) {
  console.log('[-] OVERRIDE.ts applying auth bucket retain removal policy');
  const bucket = resources.customMessageConfirmationBucket;
  // @ts-ignore
  bucket.applyRemovalPolicy('retain');
  bucket.publicAccessBlockConfiguration = { blockPublicAcls: false };
  console.log('[-] OVERRIDE.ts making auth bucket uniquely named');
  // @ts-ignore
  bucket.bucketName = {
    'Fn::Join': [
      '-',
      [
        {
          Ref: 'verificationBucketName',
        },
        {
          Ref: 'env',
        },
        {
          Ref: 'AWS::AccountId',
        },
      ],
    ],
  };
  console.log('[-] OVERRIDE.ts making auth bucket public accesible');
  resources.addCfnResource(
    {
      type: 'AWS::S3::BucketPolicy',
      properties: {
        Bucket: bucket.bucketName,
        PolicyDocument: {
          Statement: [
            {
              Action: ['s3:GetObject'],
              Effect: 'Allow',
              Resource: {
                'Fn::Join': ['', ['arn:aws:s3:::', bucket.bucketName, '/*']],
              },
              Principal: {
                AWS: ['*'],
              },
              Condition: {
                'ForAllValues:Bool': {
                  'aws:SecureTransport': 'true',
                },
              },
            },
          ],
        },
      },
    },
    'MyS3BucketPolicy'
  );
  resources.addCfnOutput(
    {
      value: bucket.bucketName,
    },
    'bucketName'
  );
}
