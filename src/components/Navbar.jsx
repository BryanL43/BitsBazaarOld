import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '../ThemeProvider';

const Navbar = () => {
    const { toggleTheme } = useTheme();
    return (
        <nav className="navBar">
            <Link to="/"><img src={require('./logo.png')} style={{ height: '34px' }} alt="BitBazaar Logo" /></Link>
            <input className="searchBar" type="text" placeholder="Search" autoComplete="off" />
            <Link id="searchIcon" to="/"><i className="glyphicon glyphicon-search"></i></Link>
            <button id="themeToggleBtn" onClick={toggleTheme}><i className="glyphicon glyphicon-blackboard"></i></button>
            <div className="userDropDown">
                <button id="userBtn"><i className="glyphicon glyphicon-user"></i></button>
                <div className="userDropDown-content">
                    <div id="userDropDownOpaque"></div>
                    <Link id="dropDown-A" to="/register">
                        <h5>Create Account</h5>
                        <p>Place orders quickly and easily.</p>
                    </Link>
                    <Link id="dropDown-A" to="/signin">
                        <h5>Log in</h5>
                        <p>Already a existing user? Welcome back.</p>
                    </Link>
                </div>
            </div>
            <div className="cartDropDown">
                <button id="cartBtn"><i className="glyphicon glyphicon-shopping-cart"></i></button>
                <div className="cartDropDown-content">
                    <div id="cartDropDownOpaque"></div>
                    <Link id="dropDown-B" to="/">
                        <h5>Your BitsBazaar Carts</h5>
                    </Link>
                    <Link id="dropDown-B" to="/">
                        <h5>Cart (0 items)</h5>
                        <p>Subtotal: <span className="subtotal-amount">$0.00</span></p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar