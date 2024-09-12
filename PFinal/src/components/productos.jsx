import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', height: 'auto' }}> {/* Ajusta el ancho y alto según sea necesario */}
            <Card.Img variant="top" src="https://www.hola.com/horizon/landscape/918cb28d3a78-pan-leche-t.jpg" />
            <Card.Body>
              <Card.Title>Card</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
