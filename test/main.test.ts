import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import { HelloWorldLambdaStack } from '../src/main';
test('Stack contains deploy stage', () => {
  const app = new App();
  // WHEN
  const stack = new HelloWorldLambdaStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::ApiGateway::Stage', {
    StageName: 'prod',
  },
  );
});
