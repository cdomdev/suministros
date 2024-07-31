import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BiHomeAlt2 } from "../../assets/icons/reactIcons";
import { Link } from "react-router-dom";

// Componentes reutilzado para las migajas de las paginas

export const Migajas = ({ categoriaRuta, subcategoriaRuta }) => {
  const categoriaParseada = categoriaRuta.toLowerCase().replace(/\s/g, "");
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="inherit" />}
      aria-label="breadcrumb">
      <Link to="/suministros/home">
        <BiHomeAlt2 className="icon" />
      </Link>
      <Link to={`/suministros/${categoriaParseada}`}>{categoriaRuta}</Link>
      <Link to={`/suministros/${subcategoriaRuta}`}>{subcategoriaRuta}</Link>
    </Breadcrumbs>
  );
};
