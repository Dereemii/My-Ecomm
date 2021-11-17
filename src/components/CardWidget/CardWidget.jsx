import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './CardWidget.css'

const CardWidget = () => {
    return (
        <>
            <Link to="/cart">
                <div className="cartCount">
                    <li><FontAwesomeIcon icon={faShoppingCart} />
                        <li>2</li>
                    </li>
                </div>
            </Link>
        </>
    );
}

export default CardWidget;