// ProductSidebar.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../style/Admin.css';
import ProductModal from './ModalProducto';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductSidebar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const handleSave = () => {
        closeModal();
    };

    return (
        <aside className="product-sidebar">
            <h2>Gestión de Productos</h2>
            <ul>
                <li>
                    <button onClick={openModal}>Crear Producto</button>
                </li>
                {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
            </ul>
            <ProductModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSave}
            />
        </aside >
    );
};

export default ProductSidebar;
