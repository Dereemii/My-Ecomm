import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ productos }) => {

    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src={productos.photo} alt="imagen de prueba" />
                </div>
                <h3>{productos.name}</h3>
                <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(productos.price)}</p>
                <ItemCount stock={productos.stock} initial={1} productos={productos} />
                <p className="stockAvailable">{productos.stock} unidades disponibles</p>
                <Link
                    to={`/item/${productos.id}`}>
                    <button>Ver detalles</button>
                </Link>

            </div>
        </>
    );
}

export default Item;