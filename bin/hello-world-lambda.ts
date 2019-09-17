#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { HelloWorldLambdaStack } from '../lib/hello-world-lambda-stack';

const app = new cdk.App();
new HelloWorldLambdaStack(app, 'HelloWorldLambdaStack');
