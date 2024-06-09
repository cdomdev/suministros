import { Carrusel } from "../../components/user/sections/Carrusel/Carrusel";
import { CategoriasCards } from "../../components/user/sections/homeComponents/CategoriasItems";
import { IconNavigateCar } from "../../utils";
import "../../styles/App.css";
import { BtnWhatsapp } from "../../utils";

export const HomeUser = () => {
  return (
    <>
      <Carrusel />
      <div className="contenido">
        <div>
          <h1>
            Haz de tu hogar un espacio unico, aqui encontraras Sanitarios,
            pinturas y mas productos para remodelar tus esapcios.
          </h1>
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
