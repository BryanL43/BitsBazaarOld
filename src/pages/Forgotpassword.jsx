import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
    const [isEmailNotFound, setIsEmailNotFound] = useState(true);

    return (
        <div>
            <Navbar />
            <main>
                <div className="forgotpwd-screen">
                    <div className="forgotpwd-container">
                        <h1>Account Verification</h1>
                        <form className="signin-form" action="/register" method="POST">
                            <p>Enter your BitsBazaar-associated email for a password reset</p>
                            <div className={`emailNotFound ${isEmailNotFound ? "" : "hidden"}`}>
                                <i className="glyphicon glyphicon-ban-circle" id="emailNotFoundIcons"></i>
                                <p>Email is not found in our records</p>
                                <i className="glyphicon glyphicon-remove" id="emailNotFoundIconsClose" onClick={() => setIsEmailNotFound(false)}></i>
                            </div>
                            <input id="emailBar" type="email" placeholder="Email Address" autoComplete="off" required />
                            <button id="submitBtn" type="submit">Continue</button>
                            <p><br></br></p>
                            <p id="alrHaveAccP">Remember your password? <Link to="/signin">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Forgotpassword