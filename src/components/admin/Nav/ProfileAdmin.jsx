import React, { useEffect, useState } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { AiOutlinePoweroff } from "../../../assets/icons/reactIcons";
import Avatar from "@mui/material/Avatar";
import { useUser } from "../../../hook";
import { getDataStorage } from "../../../utils/getDataStorage";
import { api } from "../../../config/axios.conf";
import { API_HOST } from "../../../config/config";

export const ProfileAdmin = () => {
  const { logout } = useUser();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(getDataStorage("userOnValidateScesOnline"));
  }, []);

  const logoutAdmin = async () => {
    try {
      const response = await api.post(`${API_HOST}/logout`);
      console.log(response.data);
    } catch (error) {
      console.log("Error al finalizar la sesion", error);
    }
  };

  const finnalySection = async () => {
    try {
      await logoutAdmin();
      localStorage.clear();
      sessionStorage.clear();
      navigate("/suministros/home");
      logout();
    } catch (error) {
      console.error("Error en finallySection:", error);
    }
  };

  const renderProfileImage = () => {
    if (
      data &&
      data.name &&
      typeof data.name === "string" &&
      data.name.length > 0
    ) {
      if (data.picture) {
        return (
          <Avatar
            alt={data.name}
            src={data.picture}
            sx={{ cursor: "pointer" }}
          />
        );
      } else {
        // Si no hay imagen de perfil, mostrar la primera letra del nombre
        return (
          <Avatar sx={{ bgcolor: "#f50057", color: "#fff", cursor: "pointer" }}>
            {data.name.charAt(0)}
          </Avatar>
        );
      }
    } else {
      // Si no hay datos de usuario, puedes mostrar un Avatar con una letra genérica o un componente de carga
      return (
        <Avatar
          alt="Usuario"
          sx={{ bgcolor: "#f50057", color: "#fff", cursor: "pointer" }}>
          U
        </Avatar>
      );
    }
  };

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-bottom`} style={{ width: "270px" }}>
          <Popover.Body className="popover-user-profile-admin">
            <span className="name-user-profile-admin">{data.name}</span>
            <Button className="btn-profile-users" onClick={finnalySection}>
              <AiOutlinePoweroff className="icon-btn-off" />
              Cerrar sesión
            </Button>
          </Popover.Body>
        </Popover>
      }>
      {renderProfileImage()}
    </OverlayTrigger>
  );
};
