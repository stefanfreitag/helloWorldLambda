import { expect as expectCDK, matchTemplate, MatchStyle, haveResourceLike } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import HelloWorldLambda = require('../lib/hello-world-lambda-stack');

test('Stack contains deploy stage', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HelloWorldLambda.HelloWorldLambdaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(

    haveResourceLike("AWS::ApiGateway::Stage", {
      "StageName": "prod"
    })
      
    )
});
