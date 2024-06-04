import baños from "../../../../assets/images/baños.webp";
import cocinas from "../../../../assets/images/cocinas.webp";
import constr from "../../../../assets/images/constr.webp";
import pisos from "../../../../assets/images/pisos.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const CategoriasCards = () => {
  return (
    <>
      <Link to={"/suministros/baños"}>
        <LazyLoadImage effect="blur" src={baños} alt="baños" className="img" />
        <span>Baños</span>
      </Link>
      <Link to={"/suministros/cocinas"}>
        <LazyLoadImage
          effect="blur"
          src={cocinas}
          alt="cocinas"
          className="img"
        />
        <span>cocinas</span>
      </Link>
      <Link to={"/suministros/construccionyremodelacion"}>
        <LazyLoadImage effect="blur" src={constr} alt="const" className="img" />
        <span>construccion y remodelacion</span>
      </Link>
      <Link to={"/suministros/pisosyparedes"}>
        <LazyLoadImage effect="blur" src={pisos} alt="pisos" className="img" />
        <span>Pisos y paredes</span>
      </Link>
    </>
  );
};
