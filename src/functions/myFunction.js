// functions/myFunction.js

exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify({ message: "Hello from my serverless function!" })
    };
  };
  