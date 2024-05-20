import React from 'react';
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/Navbar.css';

const LanguageSelector = () => (
    <div className="language-select">
      <div className="language">En</div>
      <i class="fa fa-caret-down"></i>
    </div>
);

export default function Navbar() {
    return (
        <div className='Nav-bar'>
            <h1 className='Logo'>Food Center</h1>
            <nav className='Nav-items'>
                <NavLink to="/login" className="Nav-item" activeClassName="active"> Login </NavLink>
                <NavLink to="/signup" className="Nav-item" activeClassName="active"> Sign Up </NavLink>
                <NavLink to="/home" className="Nav-item" activeClassName="active"> Home </NavLink>
                <NavLink to="/best-meal" className="Nav-item" activeClassName="active">Best meals</NavLink>
                <NavLink to="/fitness" className="Nav-item" activeClassName="active">Fitness</NavLink>
                <NavLink to="/fridge" className="Nav-item" activeClassName="active">My Fridge</NavLink>
                <NavLink to="/celebrities-fav" className="Nav-item" activeClassName="active">Celebrities Favorite</NavLink>
                <NavLink to="/about-us" className="Nav-item" activeClassName="active">About us</NavLink>
                <LanguageSelector />
            </nav>
        </div>
    );
}