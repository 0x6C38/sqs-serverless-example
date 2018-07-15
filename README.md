# SQS Lambda Trigger Example
This repository showcases the new SQS lambda triggers with the serverless framework on AWS.

## Requirements
- Have nodejs v6.5.0+ and npm installed
- Have serverless framework (1.28+) installed (`npm install -g serverless`)
- Have your aws credentials [setup](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

## Setup
1. Clone this repository
2. Run `npm install` on the project's directory

## Usage
There are three lambda functions included in the project. The first two, `pushToQueue` and `pushBatchToQueue` are rest endpoints that can be used to push a single message and a message batch respectively.

The last function, `queueProcessMessage`, will be triggered when a new message is detected in the SQS queue. Keep in mind SQS is poll based so it might take a couple of seconds before this happens.

### PushToQueue
Grab the `pushToQueue` endpoint URL after deploying the service using `serverless deploy` and then make a post request including a **plain text** message you want to push to the SQS Queue:

    curl -X POST ENDPOINT_URL_HERE/pushToQueue -d "Sample Message" -H 'Content-Type: text/plain'

The message will be logged to cloudwatch.

### PushBatchToQueue
Grab the `pushBatchToQueue` endpoint URL after deploying the service using `serverless deploy` and then make a post request including a **JSON array** of messages you want to push to the SQS Queue:

    curl -X POST ENDPOINT_URL_HERE/pushBatchToQueue -d '[{"firstName": "Jon", "lastName": "Snow"}, {"firstName": "Luke", "lastName": "Skywalker"}]' -H 'Content-Type: application/json'


The messages will be logged to cloudwatch.

## Clean up
All of the resources created by the deployment of this project can be cleaned using `serverless remove` as stated in the serverless framework [documentation](https://serverless.com/framework/docs/providers/aws/guide/quick-start/#cleanup).

