/**
 * @type {import("@types/aws-lambda").CustomMessageTriggerHandler}
 */
exports.handler = async (event) => {
  // Define the URL that you want the user to be directed to after verification is complete
  if (event.triggerSource === 'CustomMessage_SignUp') {
    const { codeParameter } = event.request;
    const { region, userName } = event;
    const { clientId } = event.callerContext;
    const s3BucketName = process.env.S3BUCKETNAME;
    const redirectUrl = `${process.env.REDIRECTURL}?username=${userName}`;

    const payload = Buffer.from(
      JSON.stringify({
        userName,
        redirectUrl,
        region,
        clientId,
      })
    ).toString('base64');
    const bucketUrl = `https://s3.${region}.amazonaws.com/${s3BucketName}/index.html`;
    const url = `${bucketUrl}?data=${payload}&code=${codeParameter}`;

    const message = `<p><a href="${url}"><strong>CLICK HERE</strong></a> to confirm your escobedo.mx account</p>`;
    event.response.emailSubject = process.env.EMAILSUBJECT;
    event.response.emailMessage = message;

    event.response.smsMessage = `Your verification code to verify the escobedo.mx account is ${codeParameter}`;
  }

  return event;
};
