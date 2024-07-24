import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { getDataStorage } from "../../../utils";
import axios from "axios";
import { useUser } from "../../../hook";
import { API_HOST } from "../../../config/config";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const ProfileMenu = () => {
  const { logout } = useUser();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(getDataStorage("userOnValidateScesOnline"));
  }, []);
  const navigate = useNavigate();

  const logoutAdmin = async () => {
    try {
      const response = await axios.post(`${API_HOST}/api/logout`);
      if (response.status === 200) {
        navigate("/suministros/home");
      }
    } catch (error) {
      console.log("Error al finalizar la sesion", error);
    }
  };

  const finnalySection = async () => {
    try {
      await logoutAdmin();
      localStorage.clear();
      sessionStorage.clear();
      logout();
    } catch (error) {
      console.error("Error en finallySection:", error);
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={data.name || data.nombre} src={data.picture} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center" className="logout">
            <div className="profile">
              <div className="header">
                <p>Hola {data.name || data.nombre}</p>
                <div>
                  <hr />
                </div>
              </div>
              <div className="body">
                <Link className="profile-link" to={"/admin/profile/"}>
                  <span>Mi Perfil</span>
                </Link>
                <button onClick={finnalySection} className="btn-logout">
                  Cerrar sesion
                </button>
              </div>
            </div>
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
