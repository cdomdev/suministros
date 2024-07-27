import { CardSubcategorias } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../components/common";

const Lavaderos = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Cocinas"} subcategoriaRuta={"Lavaderos"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text">
            <h1>Lavaderos</h1>
            <h2>
              Descubre soluciones practicas para hacer del lavado una tarea mas
              comoda y eficiente.
            </h2>
            <p>
              esde lavaderos de acero inoxidable hasta modelos de resina,
              encontrarás la solución perfecta para tus necesidades de
              lavandería.
            </p>
          </div>
          <CardSubcategorias
            RutaSubCategoria={"lavaderos"}
            nombreSubcategoria={"Lavaderos"}
            unidad={"UN"}
          />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </section>
  );
};

export default Lavaderos;
