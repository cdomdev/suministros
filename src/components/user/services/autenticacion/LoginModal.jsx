import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Login, Register } from "./";
import { Link, useLocation } from "react-router-dom";

const LoginModal = ({ setIsLoggedIn, controlComponent }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const location = useLocation();

  const handleShowLoginModal = () => {
    setShowModal(true);
    setIsLoginMode(true);
    sessionStorage.setItem("previousLocation", location.pathname);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowModal(true);
    setIsLoginMode(false);
    sessionStorage.setItem("previousLocation", location.pathname);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    handleCloseModal();
  };

  const renderContent = () => {
    if (isLoginMode) {
      return (
        <>
          <Login
            setIsLoggedIn={setIsLoggedIn}
            handleCloseModal={handleCloseModal}
            handleLoginSuccess={handleLoginSuccess}
          />
          <span className="btn-alter-modal">
            ¿No tienes una cuenta?{" "}
            <Link onClick={handleShowRegisterModal}> Regístrate aquí</Link>
          </span>
        </>
      );
    } else {
      return (
        <>
          <Register
            setIsLoggedIn={setIsLoggedIn}
            handleLoginSuccess={handleLoginSuccess}
          />
          <span className="btn-alter-modal" >
            ¿Ya tienes una cuanta? 
            <Link onClick={handleShowLoginModal}>¡Inica sesion!</Link>
          </span>
        </>
      );
    }
  };

  return (
    <>
      {controlComponent(handleShowLoginModal)}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="content-modal-login">
        <Modal.Header closeButton className="btn-close-custom" />
        <Modal.Body>{renderContent()}</Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
