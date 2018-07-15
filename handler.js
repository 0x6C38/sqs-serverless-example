'use strict';

const AWS = require("aws-sdk");
const QUEUE_URL = process.env.QUEUE_URL;

module.exports.pushToQueue = (event, context, callback) => {
  const message = (event.body === undefined ? 'No-message' : event.body); //JSON.parse(event.body) if message is JSON object

  const sqs = new AWS.SQS();

  const params = {
    MessageBody: JSON.stringify(message),
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
      message: message
    }),
  };

  callback(null, response);
  
};

module.exports.pushBatchToQueue = (event, context, callback) => {
  const messages = (event.body === undefined ? [] : JSON.parse(event.body));

  const entries = [];

  for (let i = 0; i < messages.length; i++){
    entries.push({Id: "" + i, MessageBody: JSON.stringify(messages[i])});
  }

  const sqs = new AWS.SQS();

  const params = {
    Entries: entries,
    QueueUrl: QUEUE_URL
  };

  try {
    sqs.sendMessageBatch(params).promise();
  } catch(error) {
    console.log(error);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      messages: messages
    }),
  };

  callback(null, response);
};



module.exports.processQueueMessages = (event, context, callback) => {

console.log("called");
  for (let i = 0; i < event.Records.length; i++){
    console.log(event.Records[i].body);
  }

  callback(null);
  
};

