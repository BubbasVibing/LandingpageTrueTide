/**
 * Alternative implementation using fetch instead of axios
 */

// Get API key from environment variables
const API_KEY = process.env.REACT_APP_BREVO_API_KEY;
const LIST_ID = parseInt(process.env.REACT_APP_BREVO_LIST_ID || '2', 10);

// CORS proxy URL - use this if you encounter CORS issues
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const USE_CORS_PROXY = false; // Set to true if you encounter CORS issues

/**
 * Add a contact to Brevo using fetch
 * @param {string} email - The email address to add
 * @returns {Promise} - The API response
 */
export const addContactToBrevoFetch = async (email) => {
  try {
    // Make sure we have an API key
    if (!API_KEY) {
      console.error('Brevo API key is missing');
      return { 
        success: false, 
        error: 'API configuration error. Please contact support.' 
      };
    }

    console.log('Using API key:', API_KEY.substring(0, 5) + '...');
    
    const apiUrl = USE_CORS_PROXY 
      ? `${CORS_PROXY}https://api.brevo.com/v3/contacts`
      : 'https://api.brevo.com/v3/contacts';
    
    const response = await fetch(apiUrl, {
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
    
    // Log the full response for debugging
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    const data = await response.json();
    console.log('Response data:', data);
    
    if (!response.ok) {
      console.error('Error response:', data);
      
      // If the contact already exists
      if (response.status === 400 && data.code === 'duplicate_parameter') {
        return { success: true, data: { message: 'Contact already exists' } };
      }
      
      return { 
        success: false, 
        error: data.message || `Error: ${response.status}` 
      };
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    return { 
      success: false, 
      error: 'Failed to add contact. Please try again later.' 
    };
  }
}; 