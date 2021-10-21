import ItemCount from '../ItemCount.js/ItemCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Item = ({ id, name, price, photo, stock }) => {


    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src={photo} alt="imagen de prueba" />
                </div>
                <h3>{name}</h3>
                <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</p>
                <ItemCount stock={stock} initial={1} />
                <div className="addToCart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </>
    );
}

export default Item;