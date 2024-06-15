import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNotification } from "../../../../hook/AppContextProvider";
import { NotificationToast } from "../../../../utils";
import { API_HOST } from "../../../../config/config";

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
      const response = await axios.post(`${API_HOST}/api/update/state-orders`, {
        estado: estado,
        id: pedido.id,
      });

      if (response.status === 200) {
        setToastMessage("Estado actualizado");
        setShowToast(true);
        setBgToast("success");
      }
    } catch (error) {
      setToastMessage("Error en la solicitud");
      setShowToast(true);
      setBgToast("danger");
    }
  };

  const estadoPedido = pedido.detalles_pedidos[0]?.estado_pedido
    ? pedido.detalles_pedidos[0]?.estado_pedido
    : "No se a actulizado el estado";

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
