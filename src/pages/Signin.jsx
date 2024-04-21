import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

const Signin = () => {
  const [email, setEmail] = useState("");

  //Password visibility toggle handler
  const [pwdVis, setPwdVis] = useState(false);
  const togglePwdVis = () => {
      setPwdVis(prevVisible => !prevVisible);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    console.log(email)
    event.preventDefault();

    try {
      // Send POST request to the API endpoint
      const response = await fetch('https://nodejs-serverless-function-express-test-rust.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: "AAA", email: "AAA" }), // Assuming email is used as both name and email for now
      });

      if (response.ok) {
        // User created successfully
        console.log('User created successfully');
        // Redirect user to another page or perform any other action
      } else {
        // Handle unsuccessful response
        console.error('Failed to add user:', response.statusText);
      }
    } catch (error) {
      // Handle any errors
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="signin-screen">
            <div className="signin-container">
              <h1>Sign In</h1>
              <form className="signin-form" onSubmit={handleSubmit}>
                  <input id="emailBar" type="email" placeholder="Email Address" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <div className="password-container">
                      <input id="passwordBar" type={pwdVis ? "text" : "password"} placeholder="Password" required />
                      <button id="passwordVis" type="button" onClick={togglePwdVis}>
                        <i id="visIcon" className={`glyphicon glyphicon-eye-${pwdVis ? 'close' : 'open'}`}></i>
                      </button>
                  </div>
                  <p>Forgot your password? <Link to="/forgotpassword">Click here</Link></p>
                  <button id="submitBtn" type="submit">Sign In</button>
                  <p>Don't have a BitsBazaar account? <Link to="/register">Create an account</Link></p>
              </form>
              <p id="extra-signin-text">By continuing, you agree to BitBazaar's Conditions of Use and Privacy Notice.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signin