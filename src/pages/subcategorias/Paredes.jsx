import { CardSubcategorias } from "../../components/user/sections/cards";
import { Migajas, IconNavigateCar, BtnWhatsapp } from "../../components/common";

const Paredes = () => {
  return (
    <>
      <section>
        <div className="migajas">
          <Migajas
            categoriaRuta={"Pisos y paredes"}
            subcategoriaRuta={"Paredes"}
          />
        </div>
        <div className="container-productos">
          <div className="contenedor-grid-products">
            <div className="content-text">
              <h1>Paredes</h1>
              <h2>
                Personaliza tus espacions con nuestro portafolio de paredes.
              </h2>
              <p>
                Nuestras opciones transformarán cualquier ambiente en un espacio
                único y acogedor.
              </p>
            </div>
            <CardSubcategorias
              RutaSubCategoria={"paredes"}
              nombreSubcategoria={"Paredes"}
              unidad={"Mt"}
            />
          </div>
        </div>
        <IconNavigateCar />
        <BtnWhatsapp />
      </section>
    </>
  );
};

export default Paredes;
