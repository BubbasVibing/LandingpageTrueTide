const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const { email } = JSON.parse(event.body);
    
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Get API key from environment variables
    const API_KEY = process.env.BREVO_API_KEY;
    const LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2', 10);
    
    if (!API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key is not configured' })
      };
    }

    // Make the request to Brevo API
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': API_KEY
      },
      body: JSON.stringify({
        email,
        listIds: [LIST_ID],
        updateEnabled: true
      })
    });

    const data = await response.json();

    // Handle different response statuses
    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, data })
      };
    } else if (response.status === 400 && data.code === 'duplicate_parameter') {
      // Contact already exists
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          data: { message: 'Contact already exists' } 
        })
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          success: false, 
          error: data.message || `Error: ${response.status}` 
        })
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: 'Server error. Please try again later.' 
      })
    };
  }
}; 