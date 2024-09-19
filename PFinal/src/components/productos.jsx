import React, { useEffect, useState, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import getProducts from '../services/GetProducts';

function GridExample() {
  const [products, setProductos] = useState([]);

  // useEffect(() => {

  //   const fetchProducts = async () => {
  //     try {
  //       const data = await getProducts();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
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

  return (
    <Row xs={1} md={3} className="g-4">
      {products.map((product) => (
        <Col key={product.id} className="d-flex justify-content-center">
          <Card style={{ width: 'auto', height: 'auto' }}>
            <Card.Img variant="top" src={`data:image/jpeg;base64,${product.imagenes}`} className='imgP' />
            <Card.Body>
              <Card.Title><strong>{product.nombre}</strong></Card.Title>
              <Card.Text>
                {product.tipo}
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
  );
}

export default GridExample;
