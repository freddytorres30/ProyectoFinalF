import React, { useEffect, useState, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

  useEffect(() => load_product(), [load_product]);

  const categorias = ['Todos', 'Pan', 'Pan Dulce', 'repostería','pastelería'];

  const manejarCambioCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  
  const productosFiltrados = products.filter((product) => {
    return categoriaSeleccionada === 'Todos' || product.categoria === categoriaSeleccionada;
  });

  return (
    <>
      <div className='categorias'>
        {categorias.map((categoria) => (
          <button key={categoria} onClick={() => manejarCambioCategoria(categoria)}>
            {categoria}
          </button>
        ))}
      </div>
      <Row xs={1} md={3} className="g-4">
        {productosFiltrados.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <Card style={{ width: '345px', height: 'auto' }}>
              <Card.Img variant="top" src={`data:image/jpeg;base64,${product.imagenes}`} className='imgP' />
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
