import { BoxText } from "../CarShoping";
import { Button } from "react-bootstrap";
import { useCarShop, useNotification } from "../../../../hook";
import { NotificationToast, getDataStorage } from "../../../../utils";
import { useNavigate } from "react-router";
import { formateValue } from "../../../../utils/funtionsProducts";
import { useEffect, useState } from "react";

export const SummaryEntrega = () => {
  const { activeStep, setStep, cartItems } = useCarShop();
  const { setShowToast, setToastMessage, setBgToast } = useNotification();
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.cantidad * item.valor,
      0
    );
  };
  useEffect(() => {
    setData(getDataStorage("DtUerForEnComp"));
  }, []);

  const subTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.cantidad * item.valor,
      0
    );
  };
  const handleContinueClick = () => {
    if (!data) {
      setBgToast("danger");
      setShowToast(true);
      setToastMessage("Ingresa los datos de envio para poder continuar");
    } else {
      navigate("/suministros/pago");
      setStep(activeStep + 1);
    }
  };

  return (
    <>
      <div className="box4">
        <NotificationToast text={"¡Datos de entrega!"} />
        <span className="subtotal">
          <strong>Subtotal: $ {formateValue(subTotal())} </strong>
        </span>
        <br />
        <hr />
        <h3>
          Total a pagar <span className="line">------------</span> $
          {formateValue(calculateTotal())}
        </h3>
        <span className="costo">El costo de envio no esta incluido</span>
        <hr />
        <div className="cont-btn">
          <Button
            style={{ textTransform: "uppercase", fontSize: "14px" }}
            onClick={handleContinueClick}>
            continuar
          </Button>
        </div>
        <hr />
        <BoxText />
      </div>
    </>
  );
};
