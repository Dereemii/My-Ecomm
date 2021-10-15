import './itemListContainer.css'

const ItemListContainer = (props) => {
    console.log(props)
    return ( 
        <>
            <h1>Hey, Wellcome {props.person}</h1>
            <img className="mainImage" src="../img/mirror-woman.jpg" alt="none" />
        </>
     );
}
 
export default ItemListContainer;