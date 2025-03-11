import axios from 'axios';

// Get API key from environment variables
const API_KEY = process.env.REACT_APP_BREVO_API_KEY;
const LIST_ID = parseInt(process.env.REACT_APP_BREVO_LIST_ID || '2', 10);

// For debugging - remove in production
console.log('API Key available:', !!API_KEY);

/**
 * Add a contact to Brevo
 * @param {string} email - The email address to add
 * @returns {Promise} - The API response
 */
export const addContactToBrevo = async (email) => {
  try {
    // Make sure we have an API key
    if (!API_KEY) {
      console.error('Brevo API key is missing');
      return { 
        success: false, 
        error: 'API configuration error. Please contact support.' 
      };
    }

    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        listIds: [LIST_ID],
        updateEnabled: true
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': API_KEY
        }
      }
    );
    
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    
    // Log more detailed error information
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
    
    // If the contact already exists
    if (error.response?.status === 400 && error.response?.data?.code === 'duplicate_parameter') {
      return { success: true, data: { message: 'Contact already exists' } };
    }
    
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to add contact' 
    };
  }
}; 