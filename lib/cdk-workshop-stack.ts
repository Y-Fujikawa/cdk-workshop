import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // サンプルコードの削除
    // https://cdkworkshop.com/ja/20-typescript/30-hello-cdk/100-cleanup.html
    // const queue = new sqs.Queue(this, 'CdkWorkshopQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });

    // const topic = new sns.Topic(this, 'CdkWorkshopTopic');

    // topic.addSubscription(new subs.SqsSubscription(queue));

    // https://cdkworkshop.com/ja/20-typescript/30-hello-cdk/200-lambda.html
    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_20_X, // execution environment
      code: lambda.Code.fromAsset('lambda'), // code loaded from "lambda" directory
      handler: 'hello.handler' // file is "hello", function is "handler"
    });
  }
}
