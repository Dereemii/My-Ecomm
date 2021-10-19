
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ initial, stock }) => {

    const [count, setCount] = useState(initial)

    const onDecrease = () => {
        if (count >= initial) {
            setCount(count - 1)
        }
    }

    const onIncrease = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src="https://via.placeholder.com/150" alt="imagen de prueba" />
                </div>
                <h3>Product Name</h3>
                <div className="counterCard">
                    <span>
                        <button onClick={onDecrease} ><FontAwesomeIcon icon={faMinus} /></button>

                    </span>
                    <span>{count}</span>
                    <span>
                        <button onClick={onIncrease}><FontAwesomeIcon icon={faPlus} /></button>
                    </span>
                </div>
                <span style={{ display: count > 4 ? 'block' : 'none' }} className="stockOver">Stock máximo alcanzado</span>
                <div className="addToCart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </>
    );
}

export default ItemCount;