import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../../../../helpers/isAuthenticated";
import { Modal, Button } from "react-bootstrap";
import { LoginModal } from "../../services/autenticacion";
import { BsBoxSeam } from "../../../../assets/icons/reactIcons";

export const Pedidos = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const [showPedidos, setShowPedidos] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isLoggedIn]);

  const handleClosePedidos = () => setShowPedidos(false);
  const handleShowPedidos = () => setShowPedidos(true);

  const redirecToPedido = () => {
    if (isAuthenticated()) {
      navigate("/suministros/user/");
    } else {
      handleShowPedidos(true);
    }
  };

  return (
    <div>
      <>
        <BsBoxSeam className="box-pedidos icon" onClick={redirecToPedido} />
        <span>MIS PEDIDOS</span>
        {!isLoggedIn && (
          <Modal
            show={showPedidos}
            onHide={handleClosePedidos}
            className="modal-pedido">
            <Modal.Header
              closeButton
              style={{ border: "none", padding: "0 10px" }}
            />
            <Modal.Body>
              <h4>
                Quieres llevar un registro o hacer seguimiento de tus compras,
                inicia sesion o registrate para ir a tu perfil
              </h4>
              <LoginModal
                setIsLoggedIn={setIsLoggedIn}
                controlComponent={(handleShow) => (
                  <Button variant="primary" onClick={handleShow}>
                    Iniciar sesion
                  </Button>
                )}
              />
            </Modal.Body>
          </Modal>
        )}
      </>
    </div>
  );
};
