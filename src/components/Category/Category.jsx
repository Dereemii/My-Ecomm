import { useParams } from "react-router-dom";


const Category = () => {
    const { categoryId } = useParams();

    return (
        <>
            <h2>Estás en la categoría: {categoryId}</h2>
        </>
    );
}

export default Category;