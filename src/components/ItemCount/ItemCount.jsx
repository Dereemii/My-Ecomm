
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';
import { useState } from 'react';
import swal from 'sweetalert';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const onDecrease = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const onIncrease = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const addToCartAlert = () => {
        onAdd(count);

        swal({
            title: "Good job!",
            text: `Haz añadido ${count}  productos en tu carrito`,
        });
    }

    return (
        <>
            <div className="counterCard">
                <div>
                    <span>
                        <button onClick={onDecrease} ><FontAwesomeIcon icon={faMinus} /></button>

                    </span>
                    <span>{count}</span>
                    <span>
                        <button onClick={onIncrease}><FontAwesomeIcon icon={faPlus} /></button>
                    </span>
                </div>
                {/* { count >= stock && <span className="stockOver">Stock máximo alcanzado</span> } */}
                <div style={{ visibility: count >= stock ? 'visible' : 'hidden' }} className="stockOver">Stock máximo alcanzado</div>
            </div>
            <div onClick={addToCartAlert} className="addToCart">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></div>

        </>
    );
}

export default ItemCount;