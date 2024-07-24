import { Link } from "react-router-dom";
import { formatTimestamp } from "../../../utils/formatTimestamp";

export const Notification = ({ notificaciones }) => {
  return (
    <>
      {notificaciones ? (
        <>
          <div className="body-notifications">
            {notificaciones.map((notificacion, index) => (
              <>
                <div key={index} className="notification">
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
