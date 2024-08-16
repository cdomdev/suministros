import { CardSubcategorias } from "../../components/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../common";

const Lavaplatos = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas categoriaRuta={"Cocinas"} subcategoriaRuta={"Lavaplatos"} />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text">
            <h1>Lavaplatos</h1>
            <h2>
              Encuantra la solucion perfectra para mantener utencilios limpios y
              reluciones.
            </h2>
            <p>
              Diseñados para ofrecer un rendimiento excepcional, nuestros
              lavaplatos te ayudarán a mantener tu cocina impecable con
              facilidad
            </p>
          </div>
          <CardSubcategorias
            RutaSubCategoria={"lavaplatos"}
            nombreSubcategoria={"Lavaplatos "}
            unidad={"UN"}
          />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </section>
  );
};

export default Lavaplatos;
