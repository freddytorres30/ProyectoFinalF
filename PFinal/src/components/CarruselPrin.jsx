import Carousel from 'react-bootstrap/Carousel';
import '../style/Carousel.css';

function DarkVariantExample() {
  return (   
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\img\churchill.png"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\img\borrachos.png"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\img\tamal.jpeg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
