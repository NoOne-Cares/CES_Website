import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className={toggle ? 'navbar expanded' : 'navbar'}>
            <Link to="/">
                <img className='brand-logo logo' src="./other_img/logo.png" alt="ces logo" />
            </Link>
            <div className='toggle-icon' onClick={handleToggle}>
                {toggle ? <ImCross size={20} /> : <GiHamburgerMenu size={25} />}
            </div>
            <ul className='links'>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/facility">FACULTY</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="#">RESOURCES</Link></li>
                <li><Link to="/member">OUR TEAM</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;