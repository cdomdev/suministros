import { useCarShop } from "../../hook";
import { BtnWhatsapp, Steps } from "../../utils";
import {
  InfoCarEntrega,
  SummaryEntrega,
} from "../../components/user/sections/entrega";

const Entrega = () => {
  const { activeStep } = useCarShop();

  return (
    <>
      <div className="container-car">
        <section>
          <Steps activeStep={activeStep} />
          <div className="box-car">
            <InfoCarEntrega />
            <div className="contenedor-summary">
              <div className="box3">
                <span className="summary-text">Resumen de tu compra</span>
              </div>
              <SummaryEntrega />
            </div>
          </div>
        </section>
        <BtnWhatsapp />
      </div>
    </>
  );
};

export default Entrega;
