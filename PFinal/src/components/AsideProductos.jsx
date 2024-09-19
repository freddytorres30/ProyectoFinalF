// ProductSidebar.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../style/Admin.css';
import ProductModal from './ModalProducto';
import Dropdown from 'react-bootstrap/Dropdown';

const FilterSidebar = () => {


    return (
        <aside className="product-sidebar">
            <h2>categorías</h2>
            <ul>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>

        </aside >
    );
};

export default FilterSidebar;
