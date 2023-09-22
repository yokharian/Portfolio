import {
  AmplifyAuthCognitoStackTemplate,
  AmplifyProjectInfo,
} from '@aws-amplify/cli-extensibility-helper';

export function override(
  resources: AmplifyAuthCognitoStackTemplate,
  amplifyProjectInfo: AmplifyProjectInfo
) {
  const bucket = resources.customMessageConfirmationBucket;
  console.log('[-] OVERRIDE.ts making auth bucket public accesible');
  // @ts-ignore
  bucket.applyRemovalPolicy('destroy');
  bucket.publicAccessBlockConfiguration = { blockPublicAcls: false };
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
          'Fn::Select': [
            3,
            {
              'Fn::Split': [
                '-',
                {
                  Ref: 'AWS::StackName',
                },
              ],
            },
          ],
        },
      ],
    ],
  };

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
}
