import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="row container">
                    RBCPC Preschool
                    <ul className="main-nav">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;