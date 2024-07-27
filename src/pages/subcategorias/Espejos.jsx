import { CardSubcategorias } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../components/common";

const Espejos = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Baños"} subcategoriaRuta={"Espejos"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text">
            <h1>Espejos</h1>
            <h2>
              Amplia rus espacios con nuestros espejos de diseño para cada
              rincon del hogar.
            </h2>
            <p>
              Desde espejos decorativos hasta espejos de aumento, encontrarás la
              pieza perfecta para añadir profundidad y elegancia a tus espacios.
            </p>
          </div>
          <CardSubcategorias
            RutaSubCategoria={"espejos"}
            nombreSubcategoria={"Griferias"}
            unidad={"UN"}
          />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </section>
  );
};

export default Espejos;
