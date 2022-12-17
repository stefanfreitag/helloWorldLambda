import * as path from 'path';

import { App, Stack, StackProps } from 'aws-cdk-lib';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { IpAddresses, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Code, Function, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';


export class HelloWorldLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'VPC', {
      ipAddresses: IpAddresses.cidr('10.0.0.0/21'),
      maxAzs: 3,
    });

    const backend = new Function(this, 'Func', {
      runtime: Runtime.PYTHON_3_7,
      tracing: Tracing.ACTIVE,
      handler: 'hello-world.handler',
      code: Code.fromAsset(path.join(__dirname, '../function/hello-world')),
      vpc: vpc,
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE_WITH_EGRESS,
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
