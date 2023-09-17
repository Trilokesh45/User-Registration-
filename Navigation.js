// Navigation.js
import React from 'react';

const Navigation = ({ setPage }) => {
  return (
    <div className="navigation">
      <div className="buttons">
        <button onClick={() => setPage('login')}>Login</button>
        <button onClick={() => setPage('signup')}>Sign Up</button>
      </div>
      <div className="description">
        <p>Welcome to our website.</p>
        <p>Please log in or sign up to access your account.</p>
      </div>
    </div>
  );
};

export default Navigation;
