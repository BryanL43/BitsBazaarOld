import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav class="navBar">
        <a id="logo" href="/">
            <img src="/img/logo.png" style="height: 34px;" alt="BitBazaar Logo"/>
        </a>
        <input class="searchBar" type="text" placeholder="Search" autocomplete="off" />
        <a id="searchIcon">
            <i class="glyphicon glyphicon-search"></i>
        </a>
        <button id="themeToggleBtn"><i class="glyphicon glyphicon-blackboard"></i></button>
        <div class="userDropDown">
            <button id="userBtn"><i class="glyphicon glyphicon-user"></i></button>
            <div class="userDropDown-content">
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
        <div class="cartDropDown">
            <button id="cartBtn"><i class="glyphicon glyphicon-shopping-cart"></i></button>
            <div class="cartDropDown-content">
                <div id="cartDropDownOpaque"></div>
                <a href="" id="dropDown-B">
                    <h5>Your BitsBazaar Carts</h5>
                </a>
                <a href="" id="dropDown-B">
                    <h5>Cart (0 items)</h5>
                    <p>Subtotal: <span class="subtotal-amount">$0.00</span></p>
                </a>
            </div>
        </div>
        
    </nav>
  )
}

export default navbar