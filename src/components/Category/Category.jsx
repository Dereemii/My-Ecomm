import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsCatalogue from "../../ProductsCatalogue.json";
import CategoryItem from "../CategoryItem/CategoryItem";


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
                    <CategoryItem
                        id={categoryItem.id}
                        photo={categoryItem.photo}
                        name={categoryItem.name}
                        description={categoryItem.description}
                        price={categoryItem.price}
                        stock={categoryItem.stock}
                    />


                </>
            ) : (
                "Cargando ficha de categoryItem..."
            )}
        </>
    );
}

export default Category;