/**
 * Service to interact with Netlify functions
 */

/**
 * Add a contact using the Netlify function
 * @param {string} email - The email address to add
 * @returns {Promise} - The API response
 */
export const addContactViaNetlify = async (email) => {
  try {
    const response = await fetch('/.netlify/functions/add-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error('Error response from Netlify function:', data);
      return { 
        success: false, 
        error: data.error || `Error: ${response.status}` 
      };
    }
    
    return data;
  } catch (error) {
    console.error('Error calling Netlify function:', error);
    return { 
      success: false, 
      error: 'Failed to add contact. Please try again later.' 
    };
  }
}; 