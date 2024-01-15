import React, { useState } from 'react';
import Login from './components/Login';
import HotelComponent from './components/HotelComponent';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    // For now, I'll simulate a successful login after a button click
    setLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <HotelComponent />
      )}
    </div>
  );
};

export default App;
