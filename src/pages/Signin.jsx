import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <main className="dark">
        <div class="signin-screen">
            <div class="signin-container">
                <h1>Sign In</h1>
                <form class="signin-form" action="/signin" method="POST">
                    <input id="emailBar" type="email" placeholder="Email Address" autocomplete="off" required />
                    <div class="password-container">
                        <input id="passwordBar" type="password" placeholder="Password" autocomplete="off" required />
                        <button id="passwordVis" type="button" onclick="pwdVis()"><i id="visIcon" class="glyphicon glyphicon-eye-open"></i></button>
                    </div>
                    <p>Forgot your password? <Link to="">Click here</Link></p>
                    <button id="submitBtn" type="submit" onclick="">Sign In</button>
                    <p>Don't have a BitsBazaar account? <Link to="/register">Create an account</Link></p>
                </form>
                <p id="extra-signin-text">By continuing, you agree to BitBazaar's Conditions of Use and Privacy Notice.</p>
            </div>
        </div>
    </main>
  )
}

export default Signin