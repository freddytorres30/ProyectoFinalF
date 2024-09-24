import React, { useEffect, useState, useCallback } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import getProducts from '../services/GetProducts';
import '../style/Productos.css';

function Destac() {
  const [productos, setProductos] = useState([]);


  const load_product=useCallback(()=>{
    const fetchProducts = async () => {
      try {
        const productosData = await getProducts();
        const productosDestacados = productosData.filter(product => product.destacado);
        setProductos(productosDestacados);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts()
   })
  
  useEffect(()=>load_product(),[load_product])

  const groupedProducts = [];
  for (let i = 0; i < productos.length; i += 3) {
    groupedProducts.push(productos.slice(i, i + 3));
  }

  return (
    <Carousel>
      {groupedProducts.map((group, index) => (
        <Carousel.Item key={index}>
          <Row className="g-4 justify-content-center">
            {group.map((product) => (
              <Col key={product.id} xs={6} sm={4}>
                <Card style={{ minWidth: '150px', width: '100%',
                  boxShadow: '0 5px 9px rgba(0, 0, 0, 0.2)',transition: '0.3s',border: 'solid #ff8196 1px'
                 }}>
                  <Card.Img variant="top" src={`data:image/jpeg;base64,${product.imagenes}`} />
                  <Card.Body>
                    <Card.Title><strong>{product.nombre}</strong></Card.Title>
                    <Card.Text>
                      {product.categoria}
                    </Card.Text>
                    <Card.Text>
                      ₡{product.precio}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Destac;
