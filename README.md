# Welcome to your CDK TypeScript project

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Local execution

```sh
cdk synth --no-staging
sam local invoke BeepWidgetHandlerCA099CFC \
    -t ./cdk.out/ComMkoelleLendersLibraryApiStack.template.json \
    --no-event
sam local invoke BeepWidgetHandlerCA099CFC \
    -t ./cdk.out/ComMkoelleLendersLibraryApiStack.template.json \
    --event ./test/events/get_base.json
```

## Reading

* [cdk2 getting started](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)
* [deploy typescript lambda with cdk](https://engineering.dunelm.com/deploying-typescript-lambdas-to-aws-with-the-cdk-ffa5519c16c5)
* [api gateway cdk example](https://bobbyhadz.com/blog/aws-cdk-api-gateway-example)
* [Getting started with AWS SAM and the AWS CDK](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-cdk-getting-started.html)
