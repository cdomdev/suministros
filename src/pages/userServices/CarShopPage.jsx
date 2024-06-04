import { useCarShop } from "../../hook";
import { Summary, InfoCar } from "../../components/user/sections/CarShoping";
import { BtnWhatsapp, Steps } from "../../utils/ComponentsUtils";

const CarShopPage = () => {
  const { activeStep } = useCarShop();

  const count = localStorage.getItem("count");

  return (
    <>
      <div className="container-car">
        <section>
          <Steps activeStep={activeStep} />
          <div className="box-car">
            <div className="contendor-infor-car">
              <div className="box1">
                <h2 className="carrito-text">
                  Produtos en el carrito{" "}
                  <span className="count">{count || 0}</span>
                </h2>
              </div>
              <InfoCar />
            </div>
            <div className="contenedor-summary">
              <div className="box3">
                <h2 className="summary-text">Resumen de tu compra</h2>
              </div>
              <Summary />
            </div>
          </div>
        </section>
        <BtnWhatsapp/>
      </div>
    </>
  );
};

export default CarShopPage;
