import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <main>
        <div className="register-screen">
            <div className="register-container">
                <h1>Create Your Account</h1>
                <p id="alrHaveAccP">Already have an account? <Link to="/signin">Sign In</Link></p>
                <div className="nameBars-container">
                    <input id="firstNameBar" type="text" placeholder="First Name" autoComplete="off" required />
                    <input id="lastNameBar" type="text" placeholder="Last Name" autoComplete="off" required />
                </div>
                <form className="signin-form" action="/register" method="POST">
                    <input id="emailBar" type="email" placeholder="Email Address" autoComplete="off" required />
                    <div className="password-container">
                        <input id="passwordBar" type="password" placeholder="Password" required />
                        <button id="passwordVis" type="button"><i id="visIcon" className="glyphicon glyphicon-eye-open"></i></button>
                    </div>
                    <div className="progressBar" hidden>
                        <div className="redPWDStrength"></div>
                        <div className="yellowPWDStrength"></div>
                        <div className="greenPWDStrength"></div>
                        <p id="pwdStatus">strong password</p>
                    </div>
                    <p id="registerNote">Passwords must be at least 8 characters in length and contain 1 upper case letter, 1 lower case letter, and 1 number.</p>
                    <button id="submitBtn" type="submit">Create Account</button>
                    <p><br></br></p>
                    <p id="extra-signin-text">By continuing, you agree to BitBazaar's Conditions of Use and Privacy Notice.</p>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Signin