import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    let navIcon = 'menu-outline'

    let navClick = () => {
        console.log(`Nav Clicked!`)
        navIcon === 'menu-outline' ? navIcon = 'close-outline' : navIcon = 'menu-outline';
        console.log(navIcon)
    }

    return (
        <header>
            <nav>
                <div className="row container">
                    RBCPC Preschool
                    <ul className="main-nav">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/programs">Tuition</Link></li>
                        <li><Link to="/programs">Parents</Link></li>
                        <li><Link to="/programs">Special Events</Link></li>
                    </ul>
                    <Link onClick={() => navClick()} to="" className="mobile-nav-icon js--nav-icon"><ion-icon name={navIcon}></ion-icon></Link>
                </div>
            </nav>
        </header>
    )
};

export default Header;