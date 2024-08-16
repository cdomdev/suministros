// import { IconNavigateCar } from "../../utils";
import { IconNavigateCar } from "../../common";
import Results from "../../components/buscador/Results";
import { BtnWhatsapp } from "../../common";

const BuscadorPage = () => {
  return (
    <>
      <section>
        <div className="container-productos">
          <h1 className="text-center pt-4">Resultados de tu busqueda</h1>
          <div className="contanier-cards text-center">
            <Results />
          </div>
        </div>
        <IconNavigateCar />
        <BtnWhatsapp />
      </section>
    </>
  );
};

export default BuscadorPage;
