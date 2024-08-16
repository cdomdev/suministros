import { Link } from "react-router-dom";
import { SvgNotFount } from "../assets/icons/reactIcons";

const NotExisting = () => {
  return (
    <div className="not-fount">
      <SvgNotFount />
      <h1>PAGE NOT FOUND</h1>
      <p>La ruta a la que esta intentando acceder no existe</p>
      <Link to={"/suministros/home"}>
        <span>Ir al inicio</span>
      </Link>
    </div>
  );
};

export default NotExisting;
