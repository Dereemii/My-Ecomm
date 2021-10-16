
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';
import { useState, useEffect } from 'react';

const ItemCount = ({ initial, stock}) => {

    const [count, setCount] = useState(parseInt(initial))

    const onDecrease = () => {
        setCount(parseInt(count - 1))
    }
    const onIncrease = () => {
        setCount(parseInt(count + 1))
    }

    useEffect(() => {
        if (count > parseInt(stock)){
            console.log("mayor a 5");
            setCount(count -1)
        } else if( count <= 0){
            console.log("menor o igual a 0")
            setCount(count +1)
        }
    }, [count, stock])


    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src="https://via.placeholder.com/150" alt="" />
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
                <div className="addToCart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </>
    );
}

export default ItemCount;