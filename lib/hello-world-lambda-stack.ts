import cdk = require('@aws-cdk/core'); 
import { Function, Runtime, Tracing, Code } from '@aws-cdk/aws-lambda';
import {Vpc, SubnetType} from '@aws-cdk/aws-ec2';
import { LambdaRestApi} from '@aws-cdk/aws-apigateway';
import path = require('path');
export class HelloWorldLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc  = new Vpc(this, 'VPC',{
      cidr: '10.0.0.0/21',
      maxAzs: 3,
    });
    
    const backend = new Function(this, 'Func', {
      runtime: Runtime.PYTHON_3_7,
      tracing: Tracing.ACTIVE,
      handler:'hello-world.handler',
      code: Code.fromAsset(path.join(__dirname, '../function/hello-world')),
      vpc: vpc,
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE
      }
    })
    const api = new LambdaRestApi(this, 'RestApi',{
      handler: backend
    })
  
  }
}
