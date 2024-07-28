import { useState, useEffect } from "react";
import { isAuthenticated } from "../../../../../helpers/isAuthenticated";
import LoginModal from "../../../services/autenticacion/LoginModal";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useCarShop } from "../../../../../hook";

const BtnContinue = ({ setIsLoggedIn, isLoggedIn }) => {
  const [show, setShow] = useState(false);
  const { setStep } = useCarShop();
  const [continueAsGuest, setContinueAsGuest] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isLoggedIn]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function handleContinue() {
    navigate("/suministros/entrega");
    setStep((prevStep) => prevStep + 1);
  }

  const handleContinueAsGuest = () => {
    setContinueAsGuest(true);
    setShow(false);
    handleContinue();
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ textTransform: "uppercase", fontSize: "14px" }}>
        Autenticarme
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <div>
          <Modal.Header closeButton></Modal.Header>
          <h4>Inicio de sesion</h4>
          <hr />
          <div className="content-use">
            <div className="outh">
              <p>
                Registrate o inicia sesion para tener un historial de tus
                compras o hacer seguiento del estado de tu pedido.
              </p>
              <div className="btn-content">
                <LoginModal
                  setIsLoggedIn={(isLoggedIn) => {
                    setIsLoggedIn(isLoggedIn);
                    if (isLoggedIn) {
                      setShow(false);
                      handleContinue();
                    }
                  }}
                  controlComponent={(handleShow) => (
                    <Button onClick={handleShow} className="btn">
                      Iniciar sesión
                    </Button>
                  )}
                />
                <Button
                  className="btn-invitado"
                  onClick={() => handleContinueAsGuest()}>
                  Continuar como invitado
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BtnContinue;
