import { useCarShop } from "../../hook";
import { Info, Summary } from "../../components/user/services/pago";
import { BtnWhatsapp, Steps } from "../../components/common";

const Pago = () => {
  const { activeStep } = useCarShop();

  return (
    <>
      <section>
        <Steps activeStep={activeStep} />
        <div className="details">
          <div className="info">
            <Info />
          </div>
          <div className="summary">
            <Summary />
          </div>
        </div>
      </section>
      <BtnWhatsapp />
    </>
  );
};
export default Pago;
