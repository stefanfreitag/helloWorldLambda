import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';

import { HelloWorldLambdaStack } from '../src/main';
test('Stack contains deploy stage', () => {
  const app = new App();
  // WHEN
  const stack = new HelloWorldLambdaStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(

    haveResourceLike('AWS::ApiGateway::Stage', {
      StageName: 'prod',
    }),

  );
});
