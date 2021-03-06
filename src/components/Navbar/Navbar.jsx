import './navbar.css';
import { Link } from "react-router-dom";
import CardWidget from '../CardWidget/CardWidget';

export const Navbar = () => {

    const categories = [
        { url: "neopets", label: "Neopets" },
        { url: "pokemon", label: "Pokemon" },
        { url: "sanrio", label: "Sanrio" }
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
                    <CardWidget />
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
