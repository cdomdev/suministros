import { Link, useNavigate } from "react-router-dom";
import { formatTimestamp } from "../../../utils/formatTimestamp";
// import { api } from "../../../config/axios.conf";
// import { API_HOST } from "../../../config/config";

export const Notification = ({ notificaciones }) => {
  // const navigate = useNavigate();

  // const handleClickNotification = async (id) => {
  //   const response = await api.post(`${API_HOST}/api/tick-read/${id}`);
  //   if (response.status === 200) {
  //     console.log("tick");
  //   }
  // };

  // const naviagateProfile = (id) => {
  //   handleClickNotification(id);
  //   navigate("/admin/profile/");
  // };

  return (
    <>
      {notificaciones ? (
        <>
          <div className="body-notifications">
            {notificaciones.map((notificacion) => (
              <>
                <div key={notificacion.id} className="notification">
                  <p>{notificacion.mensaje}</p>
                  <div className="date">
                    <span>{formatTimestamp(notificacion.createdAt)}</span>
                    <Link className="link" to={"/admin/gestion/usuarios"}>
                      Ver Pedidos
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
