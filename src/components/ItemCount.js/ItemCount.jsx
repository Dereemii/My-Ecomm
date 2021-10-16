
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';
import { useState, useEffect, useRef } from 'react';

const ItemCount = ({ initial, stock}) => {

    const [count, setCount] = useState(parseInt(initial))
    const stockText = useRef()

    const onDecrease = () => {
        setCount(parseInt(count - 1))
    }
    const onIncrease = () => {
        setCount(parseInt(count + 1))
    }

    useEffect(() => {
        if (count > parseInt(stock)){
            setCount(count -1)
            stockText.current.style.display = "block"

        } else if( count <= 0){

            setCount(count +1)
          
        } else if(count === 4){
           stockText.current.style.display = "none"
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
                <span ref={stockText} className="stockOver">Stock máximo alcanzado</span>
                <div className="addToCart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </>
    );
}

export default ItemCount;