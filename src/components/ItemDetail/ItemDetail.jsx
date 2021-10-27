const ItemDetail = ({ item }) => {


    return (
        <>
            <div>
                <p>{[...item][0].name}</p>
                <p>{[...item][0].description}</p>
                <p>Cantidad disponible {[...item][0].stock}</p>
                <img src={[...item][0].photo} alt={[...item][0].name} />
            </div>
        </>
    );
}

export default ItemDetail;