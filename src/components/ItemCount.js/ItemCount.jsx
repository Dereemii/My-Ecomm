
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = () => {

    const [name, setName] = useState("0")

    const handleClick = () =>{
        setName(parseInt(name - 1) )
    }
    const handleSum = () =>{
        setName(parseInt(name +1))
    }


    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src="https://via.placeholder.com/150" alt="" />
                </div>
                <h3>Product Name</h3>
                <div className="counterCard">
                    <span>
                        <button onClick={handleClick} ><FontAwesomeIcon icon={faMinus} /></button>
                    </span>
                    <span>{name}</span>
                    <span>
                        <button onClick={handleSum}><FontAwesomeIcon icon={faPlus} /></button>
                    </span>
                </div>
                <div className="addToCart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </>
    );
}

export default ItemCount;