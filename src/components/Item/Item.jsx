import ItemCount from '../ItemCount.js/ItemCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Item = () => {
    return (
        <div className="cardComponent">
            <div className="imgCard">
                <img src="https://via.placeholder.com/150" alt="imagen de prueba" />
            </div>
            <h3>Product Name</h3>
            <ItemCount stock={5} initial={1} />
            <div className="addToCart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></div>
        </div>
    );
}

export default Item;