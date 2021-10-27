

const ItemDetail = ({ item }) => {

    const firstItem = [...item][0]
    console.log(firstItem)

    return (
        <>
            <h2>Item Detail Container</h2>
            <div>
                {
                    item.length ?
                        <p>{firstItem.name}</p>
                        : "Cargando datos"
                }

            </div>
        </>
    );
}

export default ItemDetail;