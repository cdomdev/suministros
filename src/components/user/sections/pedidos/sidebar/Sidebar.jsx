import {
  BsBoxSeam,
  IoIosLogOut,
} from "../../../../../..public/icons/reactIcons";
import { useEffect, useState } from "react";
import { LoaderComponent } from "../../../../common";
import { getDataStorage } from "../../../../../utils";
import { API_HOST } from "../../../../../config/config";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

export const Sidebar = () => {
  const [dataSesion, setDataSesion] = useState({});
  const [dataLocal, setDataLocal] = useState({});

  useEffect(() => {
    setDataLocal(getDataStorage("userOnValidateScesOnline"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_HOST}/user/profile?email=${dataLocal.email}`
        );
        if (response.status === 200) {
          setDataSesion(response.data);
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
    <div>
      {dataSesion !== null ? (
        <>
          <div className="avatar">
            <Avatar
              alt={dataSesion?.name}
              src={dataSesion?.picture}
              sx={{ cursor: "pointer" }}
              className="avatar-icon"
            />
          </div>
          <div className="data">
            <h1>¡Hola!</h1>
            <h2>{dataSesion.name}</h2>
            <div className="box">
              <p>
                Aquí puede ver la información de su perfil y ver su historial de
                compras.
              </p>
              <strong>¡Nota!</strong>
              <p>
                Si su inicio de sesión es realizado a través de su cuenta de
                Google, los datos actualizados en este perfil no afectarán o
                harán cambios en su cuenta original.
              </p>
            </div>
            <Nav className="flex-column">
              <Link to={"details"} className="box-link">
                Ver mis compras <BsBoxSeam className="icon" />
              </Link>
              <Link className="logout" to={"/suministros/home"}>
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
