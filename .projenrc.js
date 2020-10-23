const { AwsCdkTypeScriptApp } = require('projen');

const project = new AwsCdkTypeScriptApp({
  authorName: "Stefan Freitag",
  authorEmail: "stefan@stefreitag.de",
  cdkVersion: "1.69.0",
  name: "hello-world-lambda",
  description: "A simple Hello World application using an AWS API Gateway and Lambda function.",
  repository: "https://github.com/stefanfreitag/helloWorldLambda.git",
  cdkVersionPinning: true,
  copyrightPeriod: 2020,
  copyrightOwner: "Stefan Freitag",
  cdkDependencies: [
    "@aws-cdk/aws-apigateway",
    "@aws-cdk/aws-ec2",
    "@aws-cdk/aws-lambda",
    "@aws-cdk/core",
  ]
});

project.synth();
