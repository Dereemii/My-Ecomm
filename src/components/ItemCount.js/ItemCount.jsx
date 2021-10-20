
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
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
                <div style={{ visibility: count > 4 ? 'visible' : 'hidden' }} className="stockOver">Stock máximo alcanzado</div>
            </div>


        </>
    );
}

export default ItemCount;