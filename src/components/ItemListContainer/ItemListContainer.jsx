import { useEffect, useState } from "react";
import Products from "../../Products.json";
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const getData = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("No se encontro nada");
                }
            }, 2000);
        });

    useEffect(() => {
        getData(Products)
            .then((res) => setProductos(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <h1>Hey, Wellcome {props.person}</h1>
            <div className="imgContainer">
                <span>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                <img className="mainImage" src="../img/mirror-woman2.png" alt="none" />
                <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </div>
            {productos.length
                ? productos.map((producto) => (
                    <ItemList product={producto} key={producto.id} />
                ))
                : "Loading..."}
        </>
    );
}

export default ItemListContainer;