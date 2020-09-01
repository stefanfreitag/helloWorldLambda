import { expect as expectCDK, MatchStyle, haveResourceLike } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import { HelloWorldLambdaStack } from '../lib/hello-world-lambda-stack';

test('Stack contains deploy stage', () => {
    const app = new App();
    // WHEN
    const stack = new HelloWorldLambdaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(

    haveResourceLike("AWS::ApiGateway::Stage", {
      "StageName": "prod"
    })
      
    )
});
