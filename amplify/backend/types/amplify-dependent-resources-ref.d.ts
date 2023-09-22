export type AmplifyDependentResourcesAttributes = {
  "api": {
    "portfolio": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "escobedoAuth": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "GoogleWebClient": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "AdminGroupRole": "string",
      "ModeratorGroupRole": "string",
      "RookieGroupRole": "string",
      "VipGroupRole": "string"
    }
  },
  "function": {
    "escobedoAuthCustomMessage": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}