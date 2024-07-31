import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import { FaRegCheckCircle } from "../../assets/icons/reactIcons";
import { getDataStorage } from "../../utils";
import { calcularEnvio, calculateTotal } from "../../utils/funtionsProducts";
import { formateValue } from "../../utils/funtionsProducts";

const Ticket = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const [storge, setStorage] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setStorage(getDataStorage("userOnValidateScesOnline"));
    setData(getDataStorage("dataUForFact"));
    setItem(getDataStorage("itemsUForFact"));
  }, []);

  const destino = data.destino;
  const valorTotal = calculateTotal(item);
  const valorEnvio = calcularEnvio(destino, valorTotal);

  const handleDeleteLocal = () => {
    navigate("/suministros/home");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("selectedProduct");
    sessionStorage.removeItem("DtUerForEnComp");
  };

  return (
    <div className="container">
      <div className="ticket">
        <div className="header">
          <h1 className="ticket-text">GRACIAS POR TU COMPRA</h1>
          <FaRegCheckCircle className="icon" />
        </div>
        <div className="body">
          <h2>Este es un resumen de tu pedido</h2>
          <div className="header-products">
            <span>Productos</span>
            <span>Detalles</span>
          </div>
          {item && (
            <div className="productos">
              {item &&
                item.map((producto) => (
                  <div className="unidad" key={producto.id}>
                    <div>
                      <ul>
                        <li>{producto.nombre}</li>
                        <li>$: {formateValue(parseInt(producto.valor, 10))}</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        cantidad: <li>{producto.cantidad} U.N </li>
                      </ul>
                      <hr />
                    </div>
                  </div>
                ))}
            </div>
          )}
          <hr />
          <div className="total">
            <div className="send">
              <span>Envio</span>
              <ul>
                <li> ${formateValue(valorEnvio)}</li>
              </ul>
            </div>
            <span>
              <strong>total: $ </strong>
              {formateValue(valorTotal + valorEnvio)}{" "}
            </span>
          </div>
          <hr />
          <div className="datos-envio">
            <div>
              <span>Direccion de entrega</span>
              <p>{data.direccion}</p>
              <p>{data.detalles}</p>
            </div>
            <div>
              <span>Datos del comprador</span>
              <p>
                {data.nombre || storge.name} {data.apellidos || storge.apellido}
              </p>
              <p>{data.telefono}</p>
              <p>{data.email || storge.email}</p>
            </div>
          </div>
          <hr />
          <div className="footer">
            <p>
              Su pedido estara listo de 3 a 5 dias habiles para municipio o
              ciudades cercanas a bogota y de 5 a 8 dias habiles para destino
              nacionales.
            </p>
          </div>
        </div>
        <div className="btn-content">
          <Button variant="secondary" onClick={handleDeleteLocal}>
            Volver al incio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
