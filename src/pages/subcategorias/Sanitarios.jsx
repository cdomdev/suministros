import { CardSubcategorias } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../components/common";

const Sanitarios = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Baños"} subcategoriaRuta={"Sanitarios"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text">
            <h1>Sanitarios</h1>
            <h2>Sanitarios que combinan estilo y funcionalidad.</h2>
            <p>
              Desde inodoros elegantes hasta bidés prácticos, nuestra colección
              ofrece opciones para todo tipo de baños.
            </p>
          </div>
          <CardSubcategorias
            RutaSubCategoria={"sanitarios"}
            nombreSubcategoria={"Sanitarios"}
            unidad={"UN"}
          />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </section>
  );
};

export default Sanitarios;
