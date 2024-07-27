import { useState, useEffect } from "react";
import { useCarShop } from "../../../../../hook";
import { isAuthenticated } from "../../../../../helpers/isAuthenticated";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import { BoxText } from "./";
import { BtnContinue } from "./";
import { formateValue } from "../../../../../utils/funtionsProducts";

export const Summary = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const { cartItems } = useCarShop();
  const { setStep } = useCarShop();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isLoggedIn]);

  function handleContinue() {
    setStep((prevStep) => prevStep + 1);
    navigate("/suministros/entrega");
  }
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.cantidad * item.valor,
      0
    );
  };

  const subTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.cantidad * item.valor,
      0
    );
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <BoxText />
      ) : (
        <div className="box4">
          <span className="subtotal">Subtotal: </span>
          <strong>$ {formateValue(subTotal())}</strong>
          <hr />
          <h3>
            Total a pagar <span className="line"> -------- </span>${""}
            {formateValue(calculateTotal())}
          </h3>
          <span className="costo">El costo de envío no está incluido</span>
          <hr />
          <div className="cont-btn">
            {isLoggedIn ? (
              <Button
                variant="primary"
                onClick={handleContinue}
                style={{ textTransform: "uppercase", fontSize: "14px" }}>
                Continuar
              </Button>
            ) : (
              <BtnContinue
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </div>
          <hr />
          <BoxText />
        </div>
      )}
    </>
  );
};
