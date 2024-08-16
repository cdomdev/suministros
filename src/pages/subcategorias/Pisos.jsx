import { CardSubcategorias } from "../../components/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../common";

const Pisos = () => {
  return (
    <section>
      <div className="migajas">
        <Migajas
          categoriaRuta={"Pisos y paredes"}
          subcategoriaRuta={"Pisos ceramicos"}
        />
      </div>
      <div className="container-productos">
        <div className="contenedor-grid-products">
          <div className="content-text">
            <h1>Pisos</h1>
            <h2>
              Propuestas innovadoras para renovar tus suelos con elegancia
            </h2>
            <p>
              Encuentra el piso perfecto para tu hogar entre nuestra amplia
              selección, nuestros pisos combinan belleza y resistencia para
              satisfacer tus necesidades
            </p>
          </div>
          <CardSubcategorias
            RutaSubCategoria={"pisosceramicos"}
            nombreSubcategoria={"Pisos"}
            unidad={"Mt"}
          />
        </div>
      </div>
      <IconNavigateCar />
      <BtnWhatsapp />
    </section>
  );
};

export default Pisos;
