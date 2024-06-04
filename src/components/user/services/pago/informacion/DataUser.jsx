import React, { useState, useEffect } from "react";
import { useCarShop } from "../../../../../hook";
import {
  IoIosPerson,
  FaLocationDot,
} from "../../../../../assets/icons/reactIcons";
import {
  getDataSesionStorega,
  getDataStorage,
} from "../../../../../utils/getDataStorage";
import { LoaderComponent } from "../../../../../utils/ComponentsUtils";
import { calcularEnvio } from "../../../../../utils/funtionsProducts";
import { formateValue } from "../../../../../utils/funtionsProducts";

export const DataUser = () => {
  const [data, setData] = useState([]);
  const [sesionData, setSesionData] = useState([]);
  const { cartItems } = useCarShop();

  useEffect(() => {
    setData(getDataSesionStorega("DtUerForEnComp"));
    setSesionData(getDataStorage("userOnValidateScesOnline"));
  }, []);

  const destino = data.destino;

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.cantidad * item.valor,
      0 + calcularEnvio(destino)
    );
  };

  return (
    <>
      <div className="user">
        <div className="card-user">
          <div className="header">
            <IoIosPerson className="icon" /> <span>Identificacion</span>
          </div>
          <div>
            <ul>
              {data && data.length !== 0 ? (
                <>
                  {data.nombre || sesionData.name}{" "}
                  {data.apellidos || sesionData.apellido}
                  <li>{data.email || sesionData.email}</li>
                  <li>{data.telefono}</li>
                </>
              ) : (
                <LoaderComponent />
              )}
            </ul>
          </div>
        </div>
        <div className="adrres-user">
          <div className="header">
            <FaLocationDot className="icon" /> <span>Envio</span>
          </div>
          <div>
            {data && data !== null ? (
              <ul>
                <li>{data.direccion}</li>
                <li>{data.detalles}</li>
              </ul>
            ) : (
              <LoaderComponent />
            )}
          </div>
        </div>
        <div className="total">
          <span>TOTAL A PAGAR </span>
          <strong>$: {formateValue(calculateTotal())}</strong>
        </div>
      </div>
    </>
  );
};
