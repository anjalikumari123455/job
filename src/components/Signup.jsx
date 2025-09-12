import React from 'react'
import"./Signup.css"
function Signup() {
  return (
   <>
      <form>
      <h1>Sign Up</h1>

      <label>Email Address</label>
      <input
        type="email"
        placeholder="name@email.com"
        
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="***************"
        
      />
 <label> Confirm Password</label>
      <input
        type=" Confirm password"
        placeholder="***************"
        
      />
     <button type="button" className="t-button" >
  SignUp
</button>

      
</form>
    <footer>©2023 JobPortal. All rights reserved.</footer>
    </>
  );
}
export default Signup

