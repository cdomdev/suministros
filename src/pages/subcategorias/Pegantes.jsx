import { CardSubcategorias } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../utils";

const Pegantes = () => {
  return (
    <>
      <section>
        <div className="migajas">
          <Migajas
            categoriaRuta={"Construccion y remodelacion"}
            subcategoriaRuta={"Pegantes"}
          />
        </div>
        <div className="container-productos">
          <div className="contenedor-grid-products">
            <div className="content-text">
              <h1>Pegantes ceramicos</h1>
              <h2>
                Asegura la calidad de tus proyectos con nuestros pegantes
                ceramicos.
              </h2>
              <p>
                Nuestra fórmula especial garantiza una adhesión duradera para
                tus proyectos de revestimiento.
              </p>
            </div>
            <CardSubcategorias
              RutaSubCategoria={"pegantes"}
              nombreSubcategoria={"Pegantes"}
              unidad={"UN"}
            />
          </div>
        </div>
        <IconNavigateCar />
        <BtnWhatsapp />
      </section>
    </>
  );
};

export default Pegantes;
