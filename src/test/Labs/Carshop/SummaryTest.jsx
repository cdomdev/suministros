import { Button } from "react-bootstrap";
import { BoxTest } from "./BoxTest";
import { useContext } from "react";
import { carshopContext } from "../mockContext";

export const SummaryTest = () => {
  const { cartItems } = useContext(carshopContext);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.cantidad * item.valor,
      0
    );
  };

  return (
    <>
      <div className="box4">
        <span className="subtotal">Subtotal: </span>
        <strong>
          {cartItems.reduce(
            (total, item) => total + item.cantidad * item.valor,
            0
          )}
        </strong>
        <hr />
        <h3>
          Total a pagar <span className="line"> ----------- </span> $
          {calculateTotal()}
        </h3>
        <span className="costo">El costo de envío no está incluido</span>
        <hr />
        <div className="cont-btn">
          <Button className="btn-comtinue">Continuar</Button>
        </div>
        <hr />
        <BoxTest />
      </div>
    </>
  );
};
