
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css'

const ItemCount = () => {
    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src="https://via.placeholder.com/150" alt="" />
                </div>
                <h3>Product Name</h3>
                <div className="counterCard">
                    <span>
                        <button><FontAwesomeIcon icon={faMinus} /></button>
                    </span>
                    <span>0</span>
                    <span>
                        <button><FontAwesomeIcon icon={faPlus} /></button>
                    </span>
                </div>
                <div className="addToCart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </>
    );
}

export default ItemCount;