import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navBar">
        <Link to="/"><img src={require('./logo.png')} style={{ height: '34px' }} alt="BitBazaar Logo" /></Link>
        <input className="searchBar" type="text" placeholder="Search" autoComplete="off" />
        <a id="searchIcon">
            <i className="glyphicon glyphicon-search"></i>
        </a>
        <button id="themeToggleBtn"><i className="glyphicon glyphicon-blackboard"></i></button>
        <div className="userDropDown">
            <button id="userBtn"><i className="glyphicon glyphicon-user"></i></button>
            <div className="userDropDown-content">
                <div id="userDropDownOpaque"></div>
                <a href="/register" id="dropDown-A">
                    <h5>Create Account</h5>
                    <p>Place orders quickly and easily.</p>
                </a>
                <a href="/signin" id="dropDown-A">
                    <h5>Log in</h5>
                    <p>Already a existing user? Welcome back.</p>
                </a>
                <Link>
                    <h5>Log in</h5>
                    <p>Already a existing user? Welcome back.</p>
                </Link>
            </div>
        </div>
        <div className="cartDropDown">
            <button id="cartBtn"><i className="glyphicon glyphicon-shopping-cart"></i></button>
            <div className="cartDropDown-content">
                <div id="cartDropDownOpaque"></div>
                <a href="" id="dropDown-B">
                    <h5>Your BitsBazaar Carts</h5>
                </a>
                <a href="" id="dropDown-B">
                    <h5>Cart (0 items)</h5>
                    <p>Subtotal: <span className="subtotal-amount">$0.00</span></p>
                </a>
            </div>
        </div>
        
    </nav>
  )
}

export default navbar