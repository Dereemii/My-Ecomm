import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <div>
                    <li>Logo</li>
                    <li>About Us</li>
                    <li>Out Products</li>
                </div>

                <div>
                    <li><FontAwesomeIcon icon={faSearch} /></li>
                    <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                    <li><FontAwesomeIcon icon={faUser} /></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
