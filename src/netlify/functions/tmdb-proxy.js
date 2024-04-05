// netlify/functions/tmdb-proxy.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    // Forward the request to the TMDB API
    const response = await fetch(`https://image.tmdb.org${event.path}`, {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body,
    });

    // Read the response body as text
    const data = await response.text();

    // Return the response with CORS headers
    return {
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Allow specific HTTP methods
        'Content-Type': 'application/json',
      },
      body: data,
    };
  } catch (error) {
    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
