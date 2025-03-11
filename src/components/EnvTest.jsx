import React, { useEffect, useState } from 'react';

const EnvTest = () => {
  const [envStatus, setEnvStatus] = useState({
    apiKeyExists: false,
    apiKeyFirstChars: '',
    listId: ''
  });

  useEffect(() => {
    // Check if environment variables are loaded
    const apiKey = process.env.REACT_APP_BREVO_API_KEY;
    const listId = process.env.REACT_APP_BREVO_LIST_ID;
    
    setEnvStatus({
      apiKeyExists: !!apiKey,
      apiKeyFirstChars: apiKey ? `${apiKey.substring(0, 5)}...` : 'Not found',
      listId: listId || 'Not found'
    });
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      background: '#f0f0f0', 
      padding: '10px',
      borderRadius: '5px',
      zIndex: 9999,
      fontSize: '12px',
      display: process.env.NODE_ENV === 'development' ? 'block' : 'none'
    }}>
      <h4>Environment Variables Test</h4>
      <p>API Key exists: {envStatus.apiKeyExists ? '✅' : '❌'}</p>
      <p>API Key starts with: {envStatus.apiKeyFirstChars}</p>
      <p>List ID: {envStatus.listId}</p>
    </div>
  );
};

export default EnvTest; 