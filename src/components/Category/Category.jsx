import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsCatalogue from "../../ProductsCatalogue.json";
import ItemCount from '../ItemCount/ItemCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Category = () => {
    const { categoryId } = useParams();
    const [categoryItem, setCategoryItem] = useState(null);

    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject('No se encontró nada');
                }
            }, 1500);
        });

    useEffect(() => {
        getItem(ProductsCatalogue)
            .then((res) => {
                setCategoryItem(res.find((details) => details.category === categoryId));
            })

            .catch((err) => console.log(err));
    }, [categoryId]);

    // console.log(categoryItem)
    // console.log(categoryId)

    return (
        <>
            <h2>Estás en la categoría: {categoryId}</h2>
            {categoryItem ? (
                <>
                    <div className="cardComponent">
                        <div className="imgCard">
                            <img src={categoryItem.photo} alt="imagen de prueba" />
                        </div>
                        <h3>{categoryItem.name}</h3>
                        <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(categoryItem.price)}</p>
                        <ItemCount stock={categoryItem.stock} initial={1} />
                        <div className="addToCart">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></div>
                        <p className="stockAvailable">{categoryItem.stock} unidades disponibles</p>
                        <Link
                            to={`/item/${categoryItem.id}`}>
                            <button>Ver detalles</button>
                        </Link>

                    </div>
                </>
            ) : (
                "Cargando ficha de categoryItem..."
            )}
        </>
    );
}

export default Category;