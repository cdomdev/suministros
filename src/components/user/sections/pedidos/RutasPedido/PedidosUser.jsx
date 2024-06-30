import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { getDataStorage } from "../../../../../utils";
import { API_HOST } from "../../../../../config/config";
import { formateValue } from "../../../../../utils/funtionsProducts";

const PedidosUser = () => {
  const [pedidos, setPedidos] = useState([]);
  const [dataLocal, setDataLocal] = useState({});

  useEffect(() => {
    setDataLocal(getDataStorage("userOnValidateScesOnline"));
  }, []);

  console.log(pedidos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${API_HOST}/user/listar-pedidos/${dataLocal.id}`
        );
        if (response.status === 200) {
          setPedidos(response.data.pedidos);
        }
      } catch (e) {
        console.log("Error al obtener los datos", e);
      }
    };

    const email = dataLocal?.email;
    if (email) {
      fetchData();
    }
  }, [dataLocal?.email]);

  return (
    <div className="body-deatils">
      <h1>Mis compras</h1>
      <Link to={"/suministros/user/"}>
        {" "}
        <BiArrowBack className="icon" />
        Atras
      </Link>
      <div className="table-pedidos">
        {Array.isArray(pedidos) && pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <div key={pedido.id} className="pedido-contenedor">
              {pedido.detalles_pedido.map((detalle) => (
                <div key={detalle.id} className="body-pedido">
                  <img
                    src={detalle.Producto.image}
                    alt={detalle.Producto.nombre}
                  />
                  <div className="d-flex flex-column text-body">
                    <span>
                      {" "}
                      <strong>Producto:</strong> {detalle.Producto.nombre}
                    </span>
                    <span>
                      <strong>Valor unidad:</strong> ${" "}
                      {formateValue(parseInt(detalle.Producto.valor))}
                    </span>
                    <span>
                      <strong>Valor de envio: </strong> $
                      {formateValue(parseFloat(detalle.costo_de_envio))}
                    </span>
                    <span className="state-content">
                      <strong>Estado del pedido: </strong>
                      <p className="state"> En {detalle.estado_pedido}...</p>
                    </span>
                  </div>
                </div>
              ))}
              <div className="footer-table">
                <strong> Cantidad compradas:</strong>{" "}
                {pedido.detalles_pedido[0].cantidad} -{" "}
                <strong>Valor total: </strong>
                {formateValue(parseFloat(pedido.detalles_pedido[0].total_pago))}
              </div>
            </div>
          ))
        ) : (
          <p>No tienes pedidos</p>
        )}
      </div>
    </div>
  );
};

export default PedidosUser;
