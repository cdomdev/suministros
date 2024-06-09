import { CardSubcategorias } from "../../components/user/sections/cards";
import { IconNavigateCar, Migajas, BtnWhatsapp } from "../../utils";

const Limpiadores = () => {
  return (
    <>
      <section>
        <div className="migajas">
          <Migajas
            categoriaRuta={"Construccion y remodelacion"}
            subcategoriaRuta={"Limpiadores"}
          />
        </div>
        <div className="container-productos">
          <div className="contenedor-grid-products">
            <div className="content-text">
              <h1>limpidores final obra</h1>
              <h2>
                Encuantra soluciones eficaces para dejar tus espacios
                implecables despues de la contruccion.
              </h2>
              <p>
                Diseñados para eliminar residuos de obra de manera eficaz,
                nuestros productos te ayudarán a destacar la calidad de tu
                trabajo.
              </p>
            </div>
            <CardSubcategorias
              RutaSubCategoria={"limpiadores"}
              nombreSubcategoria={"Limpiadores"}
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

export default Limpiadores;
