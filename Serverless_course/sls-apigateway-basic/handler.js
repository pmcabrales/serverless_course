'use strict';

module.exports.hello = async event => {
  console.log(event);

  var message = 'Hello world';
  const name = event.queryStringParameters && event.queryStringParameters.name;
  if(name!=null){
    message = 'Hello' + name;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };

};

module.exports.moi = async event => {
  console.log(event);

  var message = 'Hello world';
  const name = event.pathParameters && event.pathParameters.name;
  if(name!=null){
    message = 'Hello' + name;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };

};

module.exports.hola = async event => {
  
  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: body,
        input: event,
      },
      null,
      2
    ),
  };

};