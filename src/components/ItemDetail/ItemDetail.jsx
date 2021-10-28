import './ItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {


    return (
        <>
            <div className="itemDetailContainer">
                {
                    item ?
                        <div className="itemDetail">
                            <div>
                                <img src={item.photo} alt={item.photo} />
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.price)}</p>
                                <p>{item.description}</p>
                                <ItemCount stock={item.stock} initial={1} />
                                <div className="addToCart">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></div>
                            </div>
                        </div>
                        : "Cargando datos ficha de producto..."
                }
            </div>
        </>
    );
}

export default ItemDetail;