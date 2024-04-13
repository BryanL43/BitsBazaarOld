import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <main>
        <div class="register-screen">
            <div class="register-container">
                <h1>Create Your Account</h1>
                <p id="alrHaveAccP">Already have an account? <Link to="/signin">Sign In</Link></p>
                <div class="nameBars-container">
                    <input id="firstNameBar" type="text" placeholder="First Name" autocomplete="off" required />
                    <input id="lastNameBar" type="text" placeholder="Last Name" autocomplete="off" required />
                </div>
                <form class="signin-form" action="/register" method="POST">
                    <input id="emailBar" type="email" placeholder="Email Address" autocomplete="off" required />
                    <div class="password-container">
                        <input id="passwordBar" type="password" placeholder="Password" autocomplete="off" required />
                        <button id="passwordVis" type="button" onclick="pwdVis()"><i id="visIcon" class="glyphicon glyphicon-eye-open"></i></button>
                    </div>
                    <div class="progressBar" hidden>
                        <div class="redPWDStrength"></div>
                        <div class="yellowPWDStrength"></div>
                        <div class="greenPWDStrength"></div>
                        <p id="pwdStatus">strong password</p>
                    </div>
                    <p id="registerNote">Passwords must be at least 8 characters in length and contain 1 upper case letter, 1 lower case letter, and 1 number.</p>
                    <button id="submitBtn" type="submit" onclick="">Create Account</button>
                    <p><br></br></p>
                    <p id="extra-signin-text">By continuing, you agree to BitBazaar's Conditions of Use and Privacy Notice.</p>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Signin