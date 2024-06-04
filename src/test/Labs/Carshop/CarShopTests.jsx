import { SummaryTest } from "./SummaryTest";
import { InfoCarTest } from "./InfoCarTest";

const CarShopTests = () => {
  return (
    <>
      <div className="container-car">
        <section>
          <div className="box-car">
            <div className="contendor-infor-car">
              <div className="box1">
                <h1 className="carrito-text">Produtos en el carrito </h1>
              </div>
              {/* <InfoCarTest /> */}
            </div>
            <div className="contenedor-summary">
              <div className="box3">
                <h1 className="summary-text">Resumen de tu compra</h1>
              </div>
              {/* <SummaryTest /> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarShopTests;
