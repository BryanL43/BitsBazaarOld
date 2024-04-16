import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Notfoundpage = () => {
  return (
    <div>
        <Navbar />
        <main>
            <div className="error404-screen">
                <div className="error404-container">
                    <img src={require('../components/Error404Logo.png')} className="Error404Logo" alt="Error 404 Page Logo"></img>
                    <button id="returnToHome" type="button"><Link to="/">Return back to home</Link></button>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Notfoundpage