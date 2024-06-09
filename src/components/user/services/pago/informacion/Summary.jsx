import { useEffect, useState } from "react";
import { useCarShop } from "../../../../../hook";
import { LoaderComponent } from "../../../../../utils";
import { getDataSesionStorega } from "../../../../../utils/getDataStorage";
import { calcularEnvio } from "../../../../../utils/funtionsProducts";
import { formateValue } from "../../../../../utils/funtionsProducts";

export const Summary = () => {
  const { cartItems } = useCarShop();
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(getDataSesionStorega("DtUerForEnComp"));
  }, []);

  const destino = location.destino;

  return (
    <>
      <div className="box3">
        <h3>Resumen de tu compra</h3>
      </div>
      <div className="box4">
        <div>
          {cartItems && cartItems.length === 0 ? (
            <LoaderComponent />
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="card-product">
                  <div className="info-products">
                    <img src={item.image} alt="" className="img-car-shop" />
                    <div>
                      <p>{item.nombre}</p>
                      <p>Ref: {item.referencia} </p>
                      <p>Unidades: {item.cantidad} </p>
                    </div>
                  </div>
                  <div className="item-sub">
                    <div>
                      <strong>Valor unidad: </strong>
                      <span> $ {formateValue(parseInt(item.valor, 10))}</span>
                    </div>
                    <div>
                      <strong>Subtotal: </strong>
                      <span> $ {formateValue(item.cantidad * item.valor)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="send">
          <strong>Costo de envio: </strong>
          <span>$ {formateValue(calcularEnvio(destino))}</span>
        </div>
      </div>
    </>
  );
};
