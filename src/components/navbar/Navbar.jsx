import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import CardWidget from './CardWidget';

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
                    <CardWidget />
                    <li><FontAwesomeIcon icon={faUser} /></li>                 
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
