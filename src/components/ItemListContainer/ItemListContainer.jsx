

import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ItemListContainer = (props) => {

    return (
        <>
            <h1>Hey, Wellcome {props.person}</h1>
            <div className="imgContainer">
                <span>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                <img className="mainImage" src="../img/mirror-woman2.png" alt="none" />
                <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </div>
            <div className="productsContainer">
                <ItemList />
            </div>

        </>
    );
}

export default ItemListContainer;