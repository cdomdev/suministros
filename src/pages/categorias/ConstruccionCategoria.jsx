import { CardCategorias } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar } from "../../utils";
import { BtnWhatsapp } from "../../utils/ComponentsUtils";

const ConstruccionCategoria = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Construccion y remodelacion"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text"></div>
          <CardCategorias
            rutaCategoria={"construccionyremodelacion"}
            nombreCategoria={"Construccion y remodelacion"}
          />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp/>
    </section>
  );
};

export default ConstruccionCategoria;
