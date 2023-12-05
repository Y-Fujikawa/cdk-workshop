// https://cdkworkshop.com/ja/20-typescript/30-hello-cdk/200-lambda.html
exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        // cdk deployの時間計測
        // https://cdkworkshop.com/ja/20-typescript/30-hello-cdk/300-cdk-watch.html
        body: `Good Night, CDK! You've hit ${event.path}\n`
    }
}
