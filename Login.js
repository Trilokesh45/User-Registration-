// Login.js
import React from 'react';
import './BackgroundVideo.css';

const Login = () => {
  return (
    <div className="background">
      <video autoPlay loop muted>
        <source src="/dna2.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
