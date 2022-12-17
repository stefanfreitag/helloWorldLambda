const { awscdk } = require('projen');
const { Stability } = require('projen/lib/cdk');

const project = new awscdk.AwsCdkTypeScriptApp({
  authorName: 'Stefan Freitag',
  authorEmail: 'stefan.freitag@udo.edu',
  cdkVersion: '2.55.0',
  name: 'hello-world-lambda',
  description: 'A simple Hello World application using an AWS API Gateway and Lambda function.',
  repository: 'https://github.com/stefanfreitag/helloWorldLambda.git',
  keywords: ['aws', 'cdk', 'lambda', 'apigateway'],
  dependabotOptions: {
    scheduleInterval: 'monthly',
  },
  defaultReleaseBranch: 'master',
  stability: Stability.STABLE,
  cdkVersionPinning: true,
  copyrightPeriod: 2020,
  copyrightOwner: 'Stefan Freitag',
});


const common_exclude = ['cdk.context.json', 'yarn-error.log', '.history'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();