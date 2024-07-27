import { Carousel } from "react-bootstrap";
import img1 from "../../../../../public/images/1.webp";
import img2 from "../../../../../public/images/2.webp";
import img3 from "../../../../../public/images/3.webp";
import { Link } from "react-router-dom";

export const Carrusel = () => {
  return (
    <>
      <Carousel data-bs-theme="dark" className="carrusel">
        <Carousel.Item className="carrusel-item-1">
          <Link to={"/suministros/pinturas"}>
            <img
              className="d-block w-100 carousel-image "
              src={img1}
              alt="First slide"
              loading="lazy"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item className="carrusel-item-1">
          <Link to={"/suministros/ofertas"}>
            <img
              className="d-block w-100 carousel-image"
              src={img2}
              alt="Second slide"
              loading="lazy"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item className="carrusel-item-1">
          <Link to={"/suministros/medios-de-pago"}>
            <img
              className="d-block w-100 carousel-image"
              src={img3}
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
