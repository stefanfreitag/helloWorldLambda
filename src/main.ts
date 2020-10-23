import * as path from 'path';

import { LambdaRestApi } from '@aws-cdk/aws-apigateway';
import { SubnetType, Vpc } from '@aws-cdk/aws-ec2';
import { Code, Runtime, Tracing, Function } from '@aws-cdk/aws-lambda';
import { App, Construct, Stack, StackProps } from '@aws-cdk/core';


export class HelloWorldLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'VPC', {
      cidr: '10.0.0.0/21',
      maxAzs: 3,
    });

    const backend = new Function(this, 'Func', {
      runtime: Runtime.PYTHON_3_7,
      tracing: Tracing.ACTIVE,
      handler: 'hello-world.handler',
      code: Code.fromAsset(path.join(__dirname, '../function/hello-world')),
      vpc: vpc,
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE,
      },
    });
    new LambdaRestApi(this, 'RestApi', {
      handler: backend,
    });

  }
}


const app = new App();
const env = {
  region: app.node.tryGetContext('region') || process.env.CDK_DEFAULT_REGION,
  account: app.node.tryGetContext('account') || process.env.CDK_DEFAULT_ACCOUNT,
};
new HelloWorldLambdaStack(app, 'HelloWorldLambdaStack', {
  env: env,
});
