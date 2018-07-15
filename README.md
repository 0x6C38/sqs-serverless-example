# SQS Lambda Trigger Example
This repository showcases the new SQS lambda triggers with the serverless framework on AWS.

## Requirements
- Have nodejs v6.5.0+ and npm installed
- Have serverless framework installed (`npm install -g serverless`)
- Have your aws credentials [setup](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

## Setup
1. Clone this repository
2. Run `npm install` on the project's directory

## Usage
Grab the `pushToQueue` endpoint URL after deploying the service using `serverless deploy` and then make a post request including the message you want to push to the SQS Queue:

    curl -X POST ENDPOINT_URL_HERE/pushToQueue -d "Sample Message"

The message will be logged to cloudwatch.

## Clean up
All of the resources created by the deployment of this project can be cleaned using `serverless remove` as stated in the serverless framework [documentation](https://serverless.com/framework/docs/providers/aws/guide/quick-start/#cleanup).

