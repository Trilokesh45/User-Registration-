import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Navigation from './Navigation';
import './App.css'; // You can create this CSS file to style your components

function App() {
  const [page, setPage] = useState('login'); // Default to 'login' page

  return (
    <div className="App">
      <Navigation setPage={setPage} />
      {page === 'login' ? <Login /> : <Signup />}
    </div>
  );
}

export default App;
