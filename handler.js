'use strict';

const AWS = require("aws-sdk");
const QUEUE_URL = process.env.QUEUE_URL;

module.exports.pushToQueue = (event, context, callback) => {
  const body = (event.body === undefined ? 'No-message' : event.body);

  const sqs = new AWS.SQS();

  const params = {
    MessageBody: JSON.stringify(body),
    QueueUrl: QUEUE_URL
  };

  try {
    sqs.sendMessage(params).promise();
  } catch(error) {
    console.log(error);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: body
    }),
  };

  callback(null, response);
  
};


module.exports.processQueueMessages = (event, context, callback) => {

  console.log(event.Records[0].body);
  callback(null);
  
};

