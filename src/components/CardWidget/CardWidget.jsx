import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './CardWidget.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';


const CardWidget = () => {

    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <div onClick={handleShow} className="me-2 cartCount">
                    <li>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <li >2</li>
                    </li>
                </div>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Resumen Carrito de compras</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <Link to="/cart">
                            Ir a pagar
                        </Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }


    return (
        <>

            {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}

export default CardWidget;