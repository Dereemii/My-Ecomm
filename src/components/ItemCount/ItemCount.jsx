
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';
import { useState } from 'react';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ItemCount = ({ stock, initial }) => {

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

    const MySwal = withReactContent(Swal);

    const onAdd = () => {

        MySwal.fire({
            icon: 'success',
            html: `Has agregado ${count} productos a tu carrito`,
            showConfirmButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                "<a class='confirm-button' href=' /cart'  >Ir a pagar</a>",
            cancelButtonText: 'Volver al sitio',
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
            <div onClick={onAdd} className="addToCart">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></div>

        </>
    );
}

export default ItemCount;