import { CardCategorias } from "../../components/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../common";

const BañosCategoria = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Baños"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text"></div>
          <CardCategorias rutaCategoria={"baños"} nombreCategoria={"Baños"} />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </section>
  );
};

export default BañosCategoria;
