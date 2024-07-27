import { CardsOfertas } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../components/common";

const Ofertas = () => {
  return (
    <>
      <div className="migajas">
        <Migajas categoriaRuta={"Ofertas"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-ofertas">
          <div className="content-text">
            <h1>Grandes descuentos</h1>
            <h2>
              Aprovecha nuestras ofertas especiales y encuentra productos de
              calida a precios irresistibles
            </h2>
            <p>
              Aprovecha nuestras ofertas especiales y encuentra productos de
              calidad a precios unicos. nuestras ofertas te permitirán ahorrar
              en tus proyectos de renovación
            </p>
          </div>
          <CardsOfertas />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </>
  );
};

export default Ofertas;
