import ItemCount from '../ItemCount.js/ItemCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Item = ({ product }) => {
    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src={product.photo} alt="imagen de prueba" />
                </div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <ItemCount stock={5} initial={1} />
                <div className="addToCart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </>
    );
}

export default Item;