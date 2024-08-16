import { useState, useEffect } from "react";
import { EnvioInvitado } from "./envios";
import { EnvioUser } from "./envios";
import { isAuthenticated } from "../../helpers/isAuthenticated";

export const InfoCarEntrega = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isLoggedIn]);

  return (
    <>
      <div className="contendor-infor-car">
        <div className="box1">
          <span className="carrito-text">
            Ingresa los datos para la entrega de tu pedido
          </span>
        </div>
        <div className="box-entrega">
          <div className="delivery-program">
            {isLoggedIn ? <EnvioUser /> : <EnvioInvitado />}
          </div>
        </div>
      </div>
    </>
  );
};
