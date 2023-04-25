import React from 'react';
import logo from '../images/airbnb-logo.png';
const Navbar = () => {
    return(
        <nav>
            <img src={logo} alt='airbnb-logo' className='navbar--logo'></img>
        </nav>
    );
}
export default Navbar;