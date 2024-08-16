import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../common";
import { CardCategorias } from "../../components/cards";

const CocinasCategoria = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Cocinas"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text"></div>
          <CardCategorias
            rutaCategoria={"cocinas"}
            nombreCategoria={"Cocinas"}
          />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </section>
  );
};
export default CocinasCategoria;
