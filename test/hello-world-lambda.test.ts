import { expect as expectCDK, matchTemplate, MatchStyle, haveResourceLike } from '@aws-cdk/assert';
import HelloWorldLambda = require('../lib/hello-world-lambda-stack');
import { App } from '@aws-cdk/core';

test('Stack contains deploy stage', () => {
    const app = new App();
    // WHEN
    const stack = new HelloWorldLambda.HelloWorldLambdaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(

    haveResourceLike("AWS::ApiGateway::Stage", {
      "StageName": "prod"
    })
      
    )
});
