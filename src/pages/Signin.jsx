import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../components/style.css'

const Signin = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="signin-screen">
            <div className="signin-container">
                <h1>Sign In</h1>
                <form className="signin-form" action="/signin" method="POST">
                    <input id="emailBar" type="email" placeholder="Email Address" autoComplete="off" required />
                    <div className="password-container">
                        <input id="passwordBar" type="password" placeholder="Password" autoComplete="off" required />
                        <button id="passwordVis" type="button"><i id="visIcon" className="glyphicon glyphicon-eye-open"></i></button>
                    </div>
                    <p>Forgot your password? <Link to="">Click here</Link></p>
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