import { useCarShop } from "../../hook";
import { Info, Summary } from "../../components/user/services/pago";
import { BtnWhatsapp, Steps } from "../../utils/ComponentsUtils";

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
