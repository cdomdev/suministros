import { CardSubcategorias } from "../../components/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../common";

const Pinturas = () => {
  return (
    <>
      <section>
        <div className="migajas">
          <Migajas
            categoriaRuta={"Construccion y remodelacion"}
            subcategoriaRuta={"Pinturas"}
          />
        </div>
        <div className="container-productos">
          <div className="contenedor-grid-products">
            <div className="content-text">
              <h1>Pinturas</h1>
              <h2>
                Descubre colores bibrantes y acabados perfectos para cada uno de
                tus proyectos
              </h2>
              <p>
                Nuestra gama de colores vibrantes y acabados duraderos te
                permite crear ambientes que reflejen tu estilo y personalidad
              </p>
            </div>
            <CardSubcategorias
              RutaSubCategoria={"pinturas"}
              nombreSubcategoria={"Pinturas"}
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

export default Pinturas;
