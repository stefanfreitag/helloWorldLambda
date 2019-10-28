#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { HelloWorldLambdaStack } from '../lib/hello-world-lambda-stack';

const app = new cdk.App();
const env = {
    region: app.node.tryGetContext('region') || process.env.CDK_DEFAULT_REGION,
    account: app.node.tryGetContext('account') || process.env.CDK_DEFAULT_ACCOUNT
}
new HelloWorldLambdaStack(app, 'HelloWorldLambdaStack', {
    env: env
});
