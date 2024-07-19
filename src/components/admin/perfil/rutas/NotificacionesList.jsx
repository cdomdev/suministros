import { useEffect, useState } from "react";
import { getDataStorage } from "../../../../utils";
import { LoaderComponent, NotificationToast } from "../../../../utils";
import { BiArrowBack } from "../../../../assets/icons/reactIcons";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../../../../utils/formatTimestamp";
import { RiDeleteBin5Line } from "react-icons/ri";
import { api } from "../../../../config/axios.conf";
import { API_HOST } from "../../../../config/config";
import { useNotification } from "../../../../hook";

export const NotificacionesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getDataStorage("notificationsDtaIndicator"));
  }, []);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const deleteNotification = async (id) => {
    try {
      const response = await api.post(
        `${API_HOST}/api/delete-nofitication/${id}`
      );
      if (response.status === 200) {
        setBgToast("success");
        setShowToast(true);
        setToastMessage("Notificación eliminada");
        // Actualizar las notificaciones después de la eliminación
        setData(data.filter((notification) => notification.id !== id));
      }
    } catch (error) {
      if (error.response.status === 403 || error.response.status === 401) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage(
          "Parece que no tienes los permisos para esta operación"
        );
      } else if (error.response.status === 400) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("Algo salió mal, inténtalo de nuevo");
      }
      console.log("Error al eliminar la notificación", error);
    }
  };

  const handleDeleteClick = (id) => {
    deleteNotification(id);
  };

  return (
    <>
      <div className="body-profile">
        <h1>Notificaciones</h1>
        <NotificationToast text={"Actulizacion de datos "} />
        <Link to={"/admin/profile/"}>
          <BiArrowBack className="icon" /> Atras
        </Link>
        {data || data !== null ? (
          <div className="data-user-notifications">
            <ul>
              {data.map((da) => (
                <>
                  <li>
                    {da.mensaje} -{" "}
                    <span className="time">
                      {formatTimestamp(da.createdAt)}
                    </span>
                    <RiDeleteBin5Line
                      className="read"
                      onClick={() => handleDeleteClick(da.id)}
                    />
                  </li>
                </>
              ))}
            </ul>
          </div>
        ) : (
          <LoaderComponent />
        )}
      </div>
    </>
  );
};
