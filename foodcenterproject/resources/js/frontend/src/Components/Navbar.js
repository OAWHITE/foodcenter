import React from 'react';
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/Navbar.css';

const LanguageSelector = () => (
    <div className="language-select">
      <div className="language">En</div>
      <i class="fa fa-caret-down "></i>
    </div>
);

export default function Navbar() {
    return (
        <div className='Nav-bar mt-5'>
            <h1 className='Logo'>Food Center</h1>
            <nav className='Nav-items'>
                {/* <NavLink to="/login" className="Nav-item" activeClassName="active"> Login </NavLink> */}
                {/* <NavLink to="/signup" className="Nav-item" activeClassName="active"> Sign Up </NavLink> */}
                <NavLink to="/home" className="Nav-item" activeClassName="active"> Home </NavLink>
                <NavLink to="/best-meal" className="Nav-item" activeClassName="active">Best meals</NavLink>
                <NavLink to="/fitness" className="Nav-item" activeClassName="active">Fitness</NavLink>
                <NavLink to="/fridge" className="Nav-item" activeClassName="active">My Fridge</NavLink>
                <NavLink to="/celebrities-fav" className="Nav-item" activeClassName="active">Celebrities Favorite</NavLink>
                <NavLink to="/about-us" className="Nav-item" activeClassName="active">About us</NavLink>
                <LanguageSelector />
            </nav>
        {/*
            <nav className="flex gap-5 mt-1.5 text-base max-md:flex-wrap max-md:max-w-full">
                <ul className="flex flex-auto gap-5 justify-between px-2.5 my-auto font-medium text-center capitalize leading-[150%] text-neutral-800 max-md:flex-wrap">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Best meals</li>
                    <li className="cursor-pointer">Fitness</li>
                    <li className="text-orange-400 cursor-pointer">My fridge</li>
                    <li className="cursor-pointer">celebrities favorite</li>
                    <li className="cursor-pointer">About</li>
                </ul>
                <div className="flex flex-col justify-center whitespace-nowrap shadow-sm text-stone-500">
                    <div className="flex gap-1.5 px-4 py-7 bg-white rounded-2xl h-[66px] w-[66px]">
                        <div>En</div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c573ee703051cf839fb93bd20414086b49defe02f8b9ce6e9d92c233387a4416?apiKey=e15653f4f4ba4d0f8f02d4f65a81a2f4&" alt="Language icon" className="shrink-0 my-auto w-3 border border-black border-solid aspect-[1.72] stroke-[1.4px] stroke-black" />
                    </div>
                </div>
            </nav>
            <button className="justify-center items-center px-1.5 text-xl font-semibold leading-6 shadow-2xl bg-neutral-800 h-[72px] rounded-[32px] text-neutral-800 w-[72px]" tabIndex="0">
                Log in
            </button>
        */}
        </div>
    );
}