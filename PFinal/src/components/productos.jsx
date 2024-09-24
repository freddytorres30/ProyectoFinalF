import React, { useEffect, useState, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import getProducts from '../services/GetProducts';
import '../style/Productos.css';

function GridExample() {
  const [products, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState(''); 

  const load_product=useCallback(()=>{
    const fetchProducts = async () => {
      try {
        const productosData = await getProducts();
        setProductos(productosData);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts()
   })
  
  useEffect(()=>load_product(),[load_product])

  const categorias = ['Todos', 'pan', 'pan dulce', 'repostería', 'pastelería'];

  const manejarCambioCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const manejarCambioBusqueda = (event) => {
    setSearchTerm(event.target.value); // Actualiza el busacdo
  };

  const productosFiltrados = products.filter((product) => {
    const matchesCategory = categoriaSeleccionada === 'Todos' || product.categoria === categoriaSeleccionada;
    const matchesSearch = product.nombre.toLowerCase().includes(searchTerm.toLowerCase()); //para el buscador
    return matchesCategory && matchesSearch; // Filtra los 2
  });


  return (
    <>
      <div className='categorias'>
        <h2>Categorías</h2>
        {categorias.map((categoria) => (
          <button key={categoria} onClick={() => manejarCambioCategoria(categoria)}>
            {categoria}
          </button>
        ))}
        <div>
          <br />
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Buscar producto"
              value={searchTerm} // busca con el valor
              onChange={manejarCambioBusqueda} 
              aria-label="Buscar producto"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Buscar
            </Button>
          </InputGroup>
          <br />
          <Form.Label>Precios</Form.Label>
          <Form.Range />
        </div>
      </div>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {productosFiltrados.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <Card style={{ minWidth: '345px', width: '100%', height: 'auto',
              boxShadow: '0 5px 9px rgba(0, 0, 0, 0.2)',transition: '0.3s',border: 'solid #ff8196 1px'
             }}>
              <Card.Img variant="top" src={`data:image/jpeg;base64,${product.imagenes}`} />
              <Card.Body>
                <Card.Title><strong>{product.nombre}</strong></Card.Title>
                <Card.Text>
                  {product.categoria}
                </Card.Text>
                <Card.Text>
                  {product.descripcion}
                </Card.Text>
                <Card.Text>
                  ₡{product.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GridExample;
