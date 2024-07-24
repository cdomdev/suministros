import { IoIosLogOut } from "../../../../assets/icons/reactIcons";
import { LoaderComponent, getDataStorage } from "../../../../utils";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

export const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getDataStorage("userOnValidateScesOnline"));
  }, []);

  return (
    <div className="profile-content">
      {data !== null ? (
        <>
          <div className="avatar">
            <Avatar
              alt={data?.name}
              src={data?.picture}
              sx={{ cursor: "pointer" }}
              className="avatar-icon"
            />
          </div>
          <div className="data">
            <h1>¡Hola!</h1>
            <h2>{data.name || data.nombre}</h2>
            <div className="box">
              <p>¿ Que quieres hacer hoy?</p>
            </div>
            <Nav className="flex-column">
              <Link to={"/admin/gestion/usuarios"} className="box-link">
                Ver nuevos pedidos <BsBoxSeam className="icon" />
              </Link>
              <Link to={"notifications"} className="box-link">
                Ver notificaciones <IoNotificationsOutline className="icon" />
              </Link>
              <Link className="logout" to={"/admin"}>
                Salir <IoIosLogOut className="icon" />
              </Link>
            </Nav>
          </div>
        </>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};
