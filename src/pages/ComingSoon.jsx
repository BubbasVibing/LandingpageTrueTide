import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './homepage.css';

export default function ComingSoon() {
  const location = useLocation();
  const pageName = location.pathname === '/contact' ? 'Contact Us' : 'Privacy Policy';

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>{pageName}</h1>
        <p>Coming Soon</p>
        <Link to="/" className="primary-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 