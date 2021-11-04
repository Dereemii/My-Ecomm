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
                setCategoryItem(res.filter((details) => details.category === categoryId));
            })
            .catch((err) => console.log(err));
    }, [categoryId]);

    console.log(categoryItem)
    //console.log(categoryId)

    return (
        <>
            <h2>Estás en la categoría: {categoryId}</h2>
            <div className="category-container">
                {categoryItem
                    ? categoryItem.map((item) => (

                        <CategoryItem
                            productos={item}
                            key={item.id}
                            id={item.id}
                            photo={item.photo}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            stock={item.stock} />

                    ))
                    : 'Cargando productos...'}
            </div>
        </>
    );
}

export default Category;