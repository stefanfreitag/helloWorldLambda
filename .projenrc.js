const { AwsCdkTypeScriptApp, DependabotScheduleInterval, Stability } = require("projen");

const project = new AwsCdkTypeScriptApp({
    authorName: "Stefan Freitag",
    authorEmail: "stefan@stefreitag.de",
    cdkVersion: "1.101.0",
    name: "hello-world-lambda",
    description: "A simple Hello World application using an AWS API Gateway and Lambda function.",
    repository: "https://github.com/stefanfreitag/helloWorldLambda.git",
    keywords: ["aws", "cdk", "lambda", "apigateway"],
    dependabotOptions: {
        scheduleInterval: "monthly",
    },
    defaultReleaseBranch: "master",
    stability: Stability.STABLE,
    cdkVersionPinning: true,
    copyrightPeriod: 2020,
    copyrightOwner: "Stefan Freitag",
    cdkDependencies: [
        "@aws-cdk/aws-apigateway",
        "@aws-cdk/aws-ec2",
        "@aws-cdk/aws-lambda",
        "@aws-cdk/core",
    ],
});


const common_exclude = ['cdk.context.json', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();