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

  const load_product = useCallback(() => {
    const fetchProducts = async () => {
      try {
        const productosData = await getProducts();
        setProductos(productosData);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts();
  }, []);


  const categorias = ['Todos', 'pan', 'pan dulce', 'repostería', 'pastelería'];

  const manejarCambioCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const productosFiltrados = products.filter((product) => {
    return categoriaSeleccionada === 'Todos' || product.categoria === categoriaSeleccionada;
  });

  useEffect(() => load_product(), [load_product]);

  return (
    <>
      <div className='categorias'>
        {categorias.map((categoria) => (
          <button key={categoria} onClick={() => manejarCambioCategoria(categoria)}>
            {categoria}
          </button>
        ))}
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Buscar producto"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Buscar
            </Button>
          </InputGroup>
        </div>
      </div>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {productosFiltrados.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <Card style={{ minWidth: '345px', width: '100%', height: 'auto' }}>
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
