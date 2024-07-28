import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Spinner } from "react-bootstrap";
import { API_HOST } from "../../../../config/config";
import { BsBox2 } from "react-icons/bs";

const Pedidos = ({ user, url }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigete = useNavigate();

  const viewOrders = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_HOST}/api/listar/${url}/${user.id}`
      );
      if (response.status === 200) {
        const ordersUser = response.data.pedidos;
        localStorage.setItem("dataOrdersUser", JSON.stringify(ordersUser));
        localStorage.setItem("dataUserOrders", JSON.stringify(user));
        navigete("/admin/gestion/usuarios/pedidos-datails");
      }
    } catch (e) {
      console.log("Error al listar el pedido", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={viewOrders} className="btn-orders">
      {isLoading ? (
        <div className="spinner-container  ">
          <Spinner animation="border" role="status" size="sm" />
        </div>
      ) : (
        <>
          {" "}
          Tiene pedidos <BsBox2 className="icon-box mx-2" />
        </>
      )}
    </button>
  );
};

export default Pedidos;
