// Signup.js
import React from 'react';
import './BackgroundVideo.css';

const Signup = () => {
  return (
    <div className="background">
      <video autoPlay loop muted>
        <source src="/dna2.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Create Username" />
          <input type="password" placeholder="Create Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
