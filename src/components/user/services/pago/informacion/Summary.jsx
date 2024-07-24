import { useEffect, useState } from "react";
import { useCarShop } from "../../../../../hook";
import { LoaderComponent } from "../../../../../utils";
import { getDataSesionStorega } from "../../../../../utils/getDataStorage";
import {
  calcularEnvio,
  calculateTotal,
} from "../../../../../utils/funtionsProducts";
import { formateValue } from "../../../../../utils/funtionsProducts";

export const Summary = () => {
  const { cartItems } = useCarShop();
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(getDataSesionStorega("DtUerForEnComp"));
  }, []);

  const destino = location.destino;
  const valorTotal = calculateTotal(cartItems, destino);

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
                      <div className="box-text-details-product">
                        <strong>Producto:</strong>
                        <p>{item.nombre}</p>
                      </div>
                      <div className="box-text-details-product">
                        <strong>Ref:</strong>
                        <p> {item.referencia} </p>
                      </div>
                      <div className="box-text-details-product">
                        <strong>Unidades:</strong>
                        <p className="uni">{item.cantidad} </p>
                      </div>
                    </div>
                  </div>
                  <div className="item-sub">
                    <div>
                      <strong>Valor unidad: </strong>
                      <span> $ {formateValue(parseFloat(item.valor, 10))}</span>
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
          <span>$ {formateValue(calcularEnvio(destino, valorTotal))}</span>
        </div>
      </div>
    </>
  );
};
