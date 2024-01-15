
import React from 'react';
import './Login.css';
import logoImage from './images/Rectangle 6.png';

const Login = ({ onLogin }) => {
  const handleSignIn = () => {
    
    // simulate a successful login for now
    onLogin();
  };

  return (
    <div className="container">
      <div className="sign-in-container">
        <div className="sign-in-form">
          <img src={logoImage} alt="Logo" className="logo" />
          <h2>User Login</h2>
          <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="*********" />
            <button type="button" className="sign-in-button" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
          <p><a href="#">Forgot your password?</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
