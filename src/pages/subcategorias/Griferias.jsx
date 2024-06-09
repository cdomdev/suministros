import { CardSubcategorias } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../utils";

const Griferias = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Baños"} subcategoriaRuta={"Griferias"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text">
            <h1>Griferias</h1>
            <h2>
              Transforma tu cocina y baño con nuestras griferias de ultima
              generacion.
            </h2>
            <p>
              Con una variedad de estilos y acabados, nuestras griferías no solo
              son elegantes, sino también duraderas y funcionales.
            </p>
          </div>
          <CardSubcategorias
            RutaSubCategoria={"griferias"}
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

export default Griferias;
