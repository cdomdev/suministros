import React, { useEffect, useState } from "react";
import { getDataStorage } from "../../../../utils/getDataStorage";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoArrowUndoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { StateOrders } from "./StateOrders";
import { formateValue } from "../../../../utils/funtionsProducts";

const Detalles = () => {
  const [orders, setOrders] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const renderTooltip = (text) => <Tooltip id="button-tooltip">{text}</Tooltip>;

  useEffect(() => {
    setOrders(getDataStorage("dataOrdersUser"));
    setDataUser(getDataStorage("dataUserOrders"));
  }, []);

  return (
    <>
      <div className="contenedor-orders-user">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="order">
              <div className="header">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 100, hide: 150 }}
                  overlay={renderTooltip("Atras")}>
                  <Link to={"/admin/gestion/usuarios"}>
                    <span className="outline-content">
                      <IoArrowUndoOutline className="icon" />
                    </span>
                  </Link>
                </OverlayTrigger>
                <h2 className="text-center m-3">Detalles de la compra</h2>
              </div>
              <div className="info-user">
                <div>
                  <h2>Datos de la compra</h2>
                  <p>
                    {" "}
                    <strong>Método de Pago utilizado:</strong>{" "}
                    {order.detalles_pedidos[0]?.metodo_pago}
                  </p>

                  <p>
                    {" "}
                    <strong>Total pagado:</strong> ${" "}
                    {formateValue(
                      parseInt(order.detalles_pedidos[0]?.total_pago)
                    )}
                  </p>
                  <p>
                    {" "}
                    <strong>Cantidad:</strong>{" "}
                    {order.detalles_pedidos[0]?.cantidad} U.N
                  </p>
                  <p>
                    {" "}
                    <strong>Descuento:</strong>{" "}
                    {order.detalles_pedidos[0]?.descuento}%
                  </p>
                </div>
                <div>
                  <h2>Datos del comprador</h2>
                  <p>
                    <strong>Nombre:</strong> {dataUser.name || dataUser.nombre}
                  </p>
                  <p>
                    <strong>Email:</strong> {dataUser.email}
                  </p>
                  <p>
                    {" "}
                    <strong>Telefono: </strong> {dataUser.telefono}
                  </p>
                  <p>
                    {" "}
                    <strong>Direccion:</strong> {dataUser.direccion}
                  </p>
                  <p>
                    {" "}
                    <strong>Detalles: </strong> {dataUser.detalles}
                  </p>
                </div>
              </div>
              <h3 className="text-center m-3 p-0">Productos de la orden</h3>
              <div className="container-product">
                {order.detalles_pedidos.map((detalle, index) => (
                  <div key={index} className="products-datails">
                    <img src={detalle.Producto.image} alt="img" />
                    <p>Ref: {detalle.Producto.referencia}</p>
                    <p>{detalle.Producto.title}</p>
                    <p>{detalle.Producto.nombre}</p>
                    <p>$: {detalle.precio_unitario}</p>
                  </div>
                ))}
              </div>
              <StateOrders pedido={order} />
            </div>
          ))
        ) : (
          <span className="loader-details">Cargando datos...</span>
        )}
      </div>
    </>
  );
};
export default Detalles;
