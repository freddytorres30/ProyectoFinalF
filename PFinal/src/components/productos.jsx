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

  // const load_product = useCallback(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const productosData = await getProducts();
  //       setProductos(productosData);
  //     } catch (error) {
  //       console.error("Error fetching Products", error);
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

  

  const categorias = ['Todos', 'pan', 'pan dulce', 'repostería', 'pastelería'];

  const manejarCambioCategoria = (categoria) => { //actualiza categoria
    setCategoriaSeleccionada(categoria);
  };

  const manejarCambioBusqueda = (event) => { //se activa cuando hay cambios en input
    setSearchTerm(event.target.value);
  };
 //busca las coincidencias
  const productosFiltrados = products.filter((product) => {
    const matchesCategory = categoriaSeleccionada === 'Todos' || product.categoria === categoriaSeleccionada;
    const matchesSearch = product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className='categorias'>
        <br />
        <InputGroup className="mb-3">
          <strong><p>Busca el nombre del producto</p></strong>
          <Form.Control
            placeholder="Buscar producto"
            value={searchTerm}
            onChange={manejarCambioBusqueda}
            aria-label="Buscar producto"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Buscar
          </Button>
        </InputGroup>
        <br />
        <h2>Categorías</h2>
        <div className="botones-categorias">
          {categorias.map((categoria) => (
            <Button 
              key={categoria} 
              onClick={() => manejarCambioCategoria(categoria)}
              className="categoria-button"
            >
              {categoria}
            </Button>
          ))}
        </div>
      </div>

      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {productosFiltrados.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <Card className="producto-card">
              <Card.Img variant="top" src={`data:image/jpeg;base64,${product.imagenes}`} className="imgP" />
              <Card.Body>
                <Card.Title><strong>{product.nombre}</strong></Card.Title>
                <Card.Text>{product.categoria}</Card.Text>
                <Card.Text>{product.descripcion}</Card.Text>
                <Card.Text>₡{product.precio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GridExample;
