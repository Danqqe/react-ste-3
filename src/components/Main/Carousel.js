import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
    return(
      <Carousel className='mainCarousel'>
        <Carousel.Item>
          <img
            class="carousel"
            className="d-block w-100"
            src="/img/Group 112 (2).png" width={300} height={439}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;