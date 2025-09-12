import React, { useState } from 'react';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    alert(`Signing in with:\nEmail: ${email}\nPassword: ${password}`);
    
  };

  const handleSignUp = () => {
    alert("Redirecting to Sign Up page...");
    
  };

  return (
   <>
      <form>
      <h1>Please Login!</h1>

      <label>Email Address</label>
      <input
        type="email"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

      <label>Password</label>
      <input
        type="password"
        placeholder="***************"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

     <button type="button" className="sig-button" onClick={handleSignIn}>
  Sign in
</button>

      <div className="signup-inline">
  <p>Or</p>
  <button type="button" className="s-button" onClick={handleSignUp}>
    Sign Up
  </button>
</div>
</form>
  <footer>©2023 JobPortal. All rights reserved.</footer>
 
        </>
       
  );
}

export default Login;