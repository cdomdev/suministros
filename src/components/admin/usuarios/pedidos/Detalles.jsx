import React, { useEffect, useState } from "react";
import { getDataStorage } from "../../../../utils/getDataStorage";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoArrowUndoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { StateOrders } from "./StateOrders";
import { formateValue } from "../../../../utils/funtionsProducts";
import { Table } from "react-bootstrap";

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
        {orders.length === 0 ? (
          <span className="loader-details">Cargando datos...</span>
        ) : (
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
                <div className="data-user-table-response">
                  <h2>Datos del pedido</h2>
                  <Table striped bordered hover size="sm" responsive>
                    <thead>
                      <tr>
                        <th className="thead-table-users">
                          Método de Pago utilizado
                        </th>
                        <th className="thead-table-users">Total pagado</th>
                        <th className="thead-table-users">Cantidad</th>
                        <th className="thead-table-users">Descuento</th>
                        <th className="thead-table-users">Estado del pago</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{order.detalles_pedido[0]?.metodo_pago}</td>
                        <td>
                          {formateValue(
                            parseFloat(order.detalles_pedido[0]?.total_pago)
                          )}
                        </td>
                        <td>{order.detalles_pedido[0]?.cantidad}</td>
                        <td>{order.detalles_pedido[0]?.descuento}</td>
                        <td>
                          {order.detalles_pedido[0]?.status_detail ||
                            "No acreditado"}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div>
                  {" "}
                  <div className="data-user-table-response">
                    <h2>Datos del comprador </h2>
                    <Table striped bordered hover size="sm" responsive>
                      <thead>
                        <tr>
                          <th className="thead-table-users">Nombre</th>
                          <th className="thead-table-users">Correo</th>
                          <th className="thead-table-users">Telefono</th>
                          <th className="thead-table-users">Direccion</th>
                          <th className="thead-table-users">
                            Detalle adicionales
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{dataUser.name || dataUser.nombre}</td>
                          <td>{dataUser.email}</td>
                          <td>{dataUser.telefono}</td>
                          <td>{dataUser.direccion}</td>
                          <td>{dataUser.detalles}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              <h3 className="text-center m-3 p-0">Productos de la orden</h3>
              <div className="container-product">
                {order.detalles_pedido.map((detalle, index) => (
                  <div key={index} className="products-datails">
                    <img src={detalle.Producto.image} alt="img" />
                    <p>Ref: {detalle.Producto.referencia}</p>
                    <p>{detalle.Producto.title}</p>
                    <p>{detalle.Producto.nombre}</p>
                    <p>
                      $: {formateValue(parseFloat(detalle.precio_unitario))}
                    </p>
                  </div>
                ))}
              </div>
              <StateOrders pedido={order} />
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Detalles;
