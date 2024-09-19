import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import getProducts from '../services/GetProducts';

function GridExample() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Row xs={1} md={3} className="g-4">
      {products.map((product) => (
        <Col key={product.id} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', height: 'auto' }}>
            <Card.Img variant="top" src={`data:image/jpeg;base64,${product.imagenes}`} />
            <Card.Body>
              <Card.Title><strong>{product.nombre}</strong></Card.Title>
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
  );
}

export default GridExample;
