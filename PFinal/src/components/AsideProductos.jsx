// ProductSidebar.js
import React from 'react';
import '../style/Admin.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; // Importa el componente Button

const FilterSidebar = () => {
    return (
        <aside className="product-sidebar">
            <h2>Categorías</h2>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button variant="link" href="#home">Pan</Button>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button variant="link" href="#home">Pan Dulce</Button>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button variant="link" href="#home">Repostería</Button>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button variant="link" href="#home">Pastelería</Button>
                </Container>
            </Navbar>
            <br />
        </aside>
    );
};

export default FilterSidebar;
