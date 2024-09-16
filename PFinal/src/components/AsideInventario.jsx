// ProductSidebar.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../style/Admin.css';
import ProductModal from './ModalProducto';

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
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Producto"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Buscar
                    </Button>
                </InputGroup>
            </ul>
            <ProductModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSave}
            />
        </aside>
    );
};

export default ProductSidebar;
