import Item from "../Item/Item";

const ItemList = () => {
    return (
        <>
            <h1>Listado de Items</h1>
            <div className="productsContainer">
                <Item />
            </div>

        </>
    );
}

export default ItemList;