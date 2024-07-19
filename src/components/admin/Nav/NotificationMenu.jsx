import { useState, useEffect } from "react";
import { Box, IconButton, Badge, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { api } from "../../../config/axios.conf";
import { API_HOST } from "../../../config/config";
import { Notification } from "./Notification";
import { IoCloseSharp } from "react-icons/io5";

const NotificationMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificaciones, setNotificaciones] = useState([]);

  const isMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    api
      .get(`${API_HOST}/api/notifications-admin`)
      .then((response) => {
        if (response.status === 200) {
          setNotificaciones(response.data.notifications);
          localStorage.setItem(
            "notificationsDtaIndicator",
            JSON.stringify(response.data.notifications)
          );
        }
      })
      .catch((error) => {
        console.log("Error en el listado de notificaciones", error);
      });
  }, []);

  const handleNotificationMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-notification-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose} className="item-notifications">
        <div className="body">
          <div className="header">
            <span>Notificaciones</span>
            <IoCloseSharp className="close" onClick={() => handleMenuClose()} />
          </div>
          <hr />
          {notificaciones.length > 0 ? (
            <Notification notificaciones={notificaciones} />
          ) : (
            <>
              <div className="empty">
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit">
                  <Badge badgeContent={0} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <p>No tienes notificaciones</p>
              </div>
            </>
          )}
        </div>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        onClick={handleNotificationMenuOpen}>
        <Badge badgeContent={notificaciones.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {renderMenu}
    </Box>
  );
};

export default NotificationMenu;
