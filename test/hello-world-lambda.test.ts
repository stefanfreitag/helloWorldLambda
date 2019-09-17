import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import HelloWorldLambda = require('../lib/hello-world-lambda-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HelloWorldLambda.HelloWorldLambdaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});