import { useEffect, useState } from "react";
import Products from "../../Products.json";
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = () => {
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
            {productos.length
                ? productos.map((producto) => (
                    <Item product={producto} key={producto.id} />
                ))
                : "Loading..."}
        </>
    );
}

export default ItemList;