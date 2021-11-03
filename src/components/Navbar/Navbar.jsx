import './navbar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import CardWidget from './CardWidget/CardWidget';

export const Navbar = () => {

    const categories = [
        { url: "plushies", label: "Plushies" },
        { url: "pokemon", label: "Pokemon" }
    ];

    return (
        <nav>
            <ul>
                <div>
                    <Link to="/">
                        <li>Logo</li>
                    </Link>

                    {categories.map(({ url, label }) => (
                        <Link key={url} to={`/category/${url}`}>
                            <li>{label}</li>
                        </Link>
                    ))}
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
