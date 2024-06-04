import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Stepper, Step, StepLabel, Breadcrumbs } from "@mui/material";
import {
  TiShoppingCart,
  BiHomeAlt2,
  FaWhatsapp,
} from "../assets/icons/reactIcons";
import { Link } from "react-router-dom";
import { useCarShop } from "../hook";
import { useState, useEffect } from "react";
import { useNotification } from "../hook";
import { Spinner, Toast } from "react-bootstrap";
import imgLogo from "../assets/images/logo.webp";

// componente reutilizado para la navegcion al carrito
export const IconNavigateCar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const { cartItems } = useCarShop();

  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  return (
    <div>
      {cartItemCount > 0 && (
        <Link to={"/suministros/carrito-de-compras"}>
          <div className="icon-container">
            <div className="insignia">{cartItemCount}</div>
            <TiShoppingCart className="icon-car" />
          </div>
        </Link>
      )}
    </div>
  );
};

// Componentes reutilzado para las migajas de las paginas

export const Migajas = ({ categoriaRuta, subcategoriaRuta }) => {
  const categoriaParseada = categoriaRuta.toLowerCase().replace(/\s/g, "");
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="inherit" />}
      aria-label="breadcrumb">
      <Link to="/suministros/home">
        <BiHomeAlt2 className="icon" />
      </Link>
      <Link to={`/suministros/${categoriaParseada}`}>{categoriaRuta}</Link>
      <Link to={`/suministros/${subcategoriaRuta}`}>{subcategoriaRuta}</Link>
    </Breadcrumbs>
  );
};

// Componente de pasos usado en el carrito
const steps = ["Carrito de compras", "Entrega", "Pago"];

export const Steps = ({ activeStep }) => {
  return (
    <>
      <div className="steps">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </>
  );
};

// componnete de las notificaciones a nivel app con contexto

export const NotificationToast = ({ text }) => {
  const { showToast, setShowToast, toastMessage, bgToast } = useNotification();

  return (
    <div className="container-notification">
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        bg={bgToast}
        autohide>
        <Toast.Header>
          <strong className="me-auto">{text}</strong>
        </Toast.Header>
        <Toast.Body>¡{toastMessage}!</Toast.Body>
      </Toast>
    </div>
  );
};

// componentes para pantallas de carga a nivel app

export const LoaderPage = () => {
  return (
    <div className="container-loader-page">
      <Spinner animation="grow" variant="primary" className="spiner-page" />
      <span>Suministros</span>
    </div>
  );
};

export const LoaderComponent = () => {
  return (
    <div className="container-loader-component">
      <Spinner animation="grow" size="sm" variant="primary" />
      <span>Cargando...</span>
    </div>
  );
};

export const BtnWhatsapp = () => {
  return (
    <>
      <div className="cotainer-btn-whatsapp">
        <div className="content-num">
          <span>1</span>
        </div>
        <div className="content">
          <Link
            to={"https://wa.me/573208132304"}
            target="_blank"
            rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </Link>
        </div>
      </div>
    </>
  );
};
