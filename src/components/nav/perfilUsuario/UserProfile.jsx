import { useEffect, useState } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePoweroff } from "../../../assets/icons/reactIcons";
import Avatar from "@mui/material/Avatar";
import { useUser } from "../../../hook";
import { getDataStorage } from "../../../utils/getDataStorage";
import { IoPersonOutline } from "react-icons/io5";

const UserProfile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { logout } = useUser();

  useEffect(() => {
    setData(getDataStorage("userOnValidateScesOnline"));
  }, []);

  const loginOff = () => {
    localStorage.clear();
    sessionStorage.clear();
    setIsLoggedIn(false);
    logout();
    navigate("/suministros/home");
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
          <Popover.Body className="popover-user-profile">
            <span className="name-user-profile">{data.name}</span>
            <Link
              className="btn-profile-users profile"
              to={"/suministros/user/"}>
              <IoPersonOutline className="icon-btn-off" />
              Mi perfil
            </Link>
            <Button className="btn-profile-users" onClick={loginOff}>
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

export default UserProfile;
