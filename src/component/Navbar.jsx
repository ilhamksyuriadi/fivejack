import React from 'react';
import './Navbar.scss';
import ItemkuLogo from '../assets/logo/itemku-logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={ItemkuLogo} alt="itemku logo"/>
        </div>
    )
}

export default Navbar;