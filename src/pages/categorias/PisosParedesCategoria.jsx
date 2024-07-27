import { CardCategorias } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../components/common";

const PisosParedesCategoria = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Pisos y paredes"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text"></div>
          <CardCategorias
            rutaCategoria={"pisosyparedes"}
            nombreCategoria={"Pisos y paredes"}
          />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </section>
  );
};

export default PisosParedesCategoria;
