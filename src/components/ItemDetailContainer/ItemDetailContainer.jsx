import { useEffect, useState } from "react";
import ProductsCatalogue from "../../ProductsCatalogue.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("No se encontro nada");
                }
            }, 3000);
        });

    useEffect(() => {
        getItem(ProductsCatalogue)
            .then((res) => setItem(res))
            .catch((err) => console.log(err));

    }, []);

    return (
        <>

            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer;