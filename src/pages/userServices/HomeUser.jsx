import { Carrusel } from "../../components/Carrusel/Carrusel";
import { CategoriasCards } from "../../components/homeComponents/CategoriasItems";
import { IconNavigateCar, BtnWhatsapp } from "../../common";
import "../../styles/App.css";
import { MasVendidos } from "../../components/homeComponents/MasVendidos";

export const HomeUser = () => {
  return (
    <>
      <Carrusel />
      <div className="contenido">
        <div>
          <h1>
            Haz de tu hogar un espacio unico, aqui encontraras Sanitarios,
            pinturas, lavamanos, cocinas y mas productos para remodelar tus
            espacios.
          </h1>
        </div>
        <h2>Productos mas vendidos</h2>
        <div className="most-salleds">
          <MasVendidos />
        </div>
        <h2>Visita nuestras categorias</h2>
        <div className="card-categorias">
          <CategoriasCards />
        </div>
        <div>
          <p>
            Somos la marca de remodelación de los colombianos, con una tienda
            virtual para que compres fácil y rápido, con una amplia red de
            distribución por todo el país. Ofrecemos una amplia variedad de
            productos para que puedas encontrar exactamente lo que necesitas:
            pinturas, materiales de construcción y más. Somos distribuidores de
            marcas como Corona SAS y Listo SAS.
          </p>
        </div>
        <h3 className="jumping-text">¡Tu visión, nuestra misión!</h3>
      </div>
      <BtnWhatsapp />
      <IconNavigateCar />
    </>
  );
};
