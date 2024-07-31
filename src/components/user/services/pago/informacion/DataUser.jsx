import { useState, useEffect } from "react";
import { useCarShop } from "../../../../../hook";
import {
  IoIosPerson,
  FaLocationDot,
} from "../../../../../assets/icons/reactIcons";
import {
  getDataSesionStorega,
  getDataStorage,
} from "../../../../../utils/getDataStorage";
import { LoaderComponent } from "../../../../common";
import {
  calcularEnvio,
  calculateTotal,
  formateValue,
} from "../../../../../utils/funtionsProducts";

export const DataUser = () => {
  const [data, setData] = useState([]);
  const [sesionData, setSesionData] = useState([]);
  const { cartItems } = useCarShop();

  useEffect(() => {
    setData(getDataSesionStorega("DtUerForEnComp"));
    setSesionData(getDataStorage("userOnValidateScesOnline"));
  }, []);

  const destino = data.destino;
  const valorTotal = calculateTotal(cartItems);
  const costoEnvio = calcularEnvio(destino, valorTotal);

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
                  <strong>Nombre: </strong>
                  <br />
                  {data.nombre || sesionData.name}{" "}
                  {data.apellidos || sesionData.apellido} <br />
                  <strong>Email: </strong>
                  <li>{data.email || sesionData.email}</li>
                  <strong>Telefono</strong>
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
                <strong>Direccion:</strong>
                <li> {data.direccion}</li>
                <strong>Detalles:</strong>
                <li className="details-li">{data.detalles}</li>
              </ul>
            ) : (
              <LoaderComponent />
            )}
          </div>
        </div>
        <div className="total">
          <span>TOTAL A PAGAR </span>
          <strong>$: {formateValue(valorTotal + costoEnvio)}</strong>
        </div>
      </div>
    </>
  );
};
