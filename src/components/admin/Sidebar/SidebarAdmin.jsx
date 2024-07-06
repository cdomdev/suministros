import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineInventory, MdAssignmentAdd } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { IoBagAddSharp } from "react-icons/io5";
import { useUser } from "../../../hook";
import {
  AiOutlinePoweroff,
  IoIosPerson,
  GiHistogram,
} from "../../../assets/icons/reactIcons";
import logo from "../img/logo.webp";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function SidebarAdmin() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { logout } = useUser();

  const redirectToHome = () => {
    navigate("/admin");
  };
  const navigate = useNavigate();

  const finnalySection = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/suministros/home");
    setTimeout(() => {
      logout();
    }, 2000);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routes = [
    { name: "Home", path: "/admin", icon: <AiFillHome className="icon" /> },
    {
      name: "Ordenes de compra",
      path: "/admin/gestion/usuarios",
      icon: <BsBoxSeam className="icon" />,
    },
    {
      name: "Productos",
      path: "/admin/añadir/productos",
      icon: <IoBagAddSharp className="icon" />,
    },
    {
      name: "Inventario",
      path: "/admin/gestion/inventario",
      icon: <MdOutlineInventory className="icon" />,
    },
    {
      name: "Ofertas",
      path: "/admin/crear/ofertas",
      icon: <BiSolidOffer className="icon" />,
    },
    {
      name: "Categorias",
      path: "/admin/gestionar/categorias",
      icon: <MdAssignmentAdd className="icon" />,
    },
    {
      name: "Subcategorias",
      path: "/admin/gestionar/subcategorias",
      icon: <MdAssignmentAdd className="icon" />,
    },
    {
      name: "Balances",
      path: "/admin/balances",
      icon: <GiHistogram className="icon" />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          <div className="nav-sidebar">
            <Typography variant="h6" noWrap component="div">
              SUMINISTROS
            </Typography>
            <div className="box-infor-admin">
              <div className="admin" onClick={redirectToHome}>
                <IoIosPerson className="icon" />
                ADMIN
              </div>
              <div className="logout">
                <button onClick={finnalySection}>
                  <AiOutlinePoweroff className="off" />
                </button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="list-icons">
          {routes.map((route) => (
            <ListItem key={route.name} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                to={route.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  {route.icon}
                </ListItemIcon>
                <ListItemText
                  primary={route.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
