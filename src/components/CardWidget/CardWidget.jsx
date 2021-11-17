import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './CardWidget.css'

const CardWidget = () => {
    return (
        <>
            <div className="cartCount">
                <li><FontAwesomeIcon icon={faShoppingCart} />
                    <li>2</li></li>

            </div>
        </>
    );
}

export default CardWidget;