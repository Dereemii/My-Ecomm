import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({ product }) => {


    return (
        <>
            <Item
                name={product.name}
                price={product.price}
                photo={product.photo}
                stock={product.stock}
            />
        </>
    );
}

export default ItemList;