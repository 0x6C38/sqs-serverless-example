'use strict';

const QUEUE_URL = process.env.QUEUE_URL;

module.exports.pushToQueue = (event, context, callback) => {
  const body = (event.body === undefined ? 'No-message' : event.body);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: QUEUE_URL
    }),
  };

  callback(null, response);
  
};
