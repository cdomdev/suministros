import { useEffect, useState } from "react";
import { DataUser } from "./DataUser";
import { MercadoPago, PagoUser, PagoInvitado } from "../MetodosDePago";

import { isAuthenticated } from "../../../helpers/isAuthenticated";
import { MercadoPagoInvitado } from "../MetodosDePago/MercadoPagoInvitado";

export const Info = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isLoggedIn]);

  return (
    <>
      <div className="box1">
        <h3>Ya casi es tuya</h3>
      </div>
      <div className="box2">
        <div className="info">
          <DataUser />
        </div>
        <div className="metodos-pago">
          <h4>Metodos de pago</h4>
          <div>
            <div className="mercadopago">
              {/* <MercadoPago /> */}
              {isLoggedIn ? <MercadoPago /> : <MercadoPagoInvitado />}
            </div>
            <div className="contra-entrega">
              {/* pago contra entrega  */}
              {isLoggedIn ? <PagoUser /> : <PagoInvitado />}
            </div>
            <p>Paga en la puerta de tu casa</p>
          </div>
        </div>
      </div>
    </>
  );
};
