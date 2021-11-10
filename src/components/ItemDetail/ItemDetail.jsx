import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ name, description, stock, photo, price, onAdd, quantity }) => {

    return (
        <>
            <div className="itemDetail">
                <div>
                    <img src={photo} alt={photo} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</p>
                    <p>{description}</p>
                    <ItemCount stock={stock} initial={0} onAdd={onAdd} quantity={quantity} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;