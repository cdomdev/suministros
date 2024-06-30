import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNotification } from "../../../../hook/AppContextProvider";
import { NotificationToast } from "../../../../utils";
import { API_HOST } from "../../../../config/config";
import { api } from "../../../../config/axios.conf";

const states = {
  alistamiento: "alistamiento",
  camino: "camino",
  entregado: "entregado",
};

export const StateOrders = ({ pedido }) => {
  const [estado, setEstado] = useState(pedido.estado);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const handleChangeEstado = async (e) => {
    try {
      const response = await api.post(`${API_HOST}/api/update/state-orders`, {
        estado: estado,
        id: pedido.id,
      });

      if (response.status === 200) {
        setToastMessage("Estado actualizado con exito");
        setShowToast(true);
        setBgToast("success");
      }
    } catch (error) {
      if (error.response.status === 403) {
        setToastMessage("No tienes los permisos para esta operacion");
        setShowToast(true);
        setBgToast("danger");
      } else {
        setToastMessage("Error en la solicitud");
        setShowToast(true);
        setBgToast("danger");
      }
      console.log("Error en la actulizacion del estado", error);
    }
  };

  const estadoPedido = pedido.detalles_pedido[0]?.estado_pedido
    ? pedido.detalles_pedido[0]?.estado_pedido
    : "Pedido sin estado";

  const estadoClase = states[estadoPedido] || "";

  return (
    <div className="select-estado">
      <NotificationToast text={"Notificacion de estado"} />
      <p>Estado del pedido: </p>
      <p className={`state ${estadoClase}`}>{estadoPedido}</p>
      <select
        name="estado"
        id="estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}>
        <option value="">Seleccione un estado</option>
        <option value="alistamiento">En alistamiento...</option>
        <option value="camino">En camino</option>
        <option value="entregado">Entregado</option>
      </select>
      <Button onClick={handleChangeEstado}>Actualizar</Button>
    </div>
  );
};
