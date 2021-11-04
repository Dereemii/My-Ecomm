import ItemCount from '../ItemCount/ItemCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './CategoryItem.css'

const CategoryItem = ({ name, stock, photo, price, id }) => {
    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src={photo} alt="imagen de prueba" />
                </div>
                <h3>{name}</h3>
                <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</p>
                <ItemCount stock={stock} initial={1} />
                <div className="addToCart">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></div>
                <p className="stockAvailable">{stock} unidades disponibles</p>
                <Link
                    to={`/item/${id}`}>
                    <button>Ver detalles</button>
                </Link>
            </div>
        </>
    );
}

export default CategoryItem;