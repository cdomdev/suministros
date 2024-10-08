import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { Modal, Button } from "react-bootstrap";
import LoginModal from "../autenticacion/LoginModal";
import { BsBoxSeam } from "../../assets/icons/reactIcons";

const Pedidos = () => {
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
            <h4>Pedidos</h4>
            <hr />
            <Modal.Body>
              <p>
                Inicia sesion o registrate y disfruta de todos los beneficios
                que tenemos para ti.
              </p>
              <LoginModal
                setIsLoggedIn={setIsLoggedIn}
                controlComponent={(handleShow) => (
                  <Button variant="primary" onClick={handleShow}>
                    Iniciar sesion
                  </Button>
                )}
              />
              <Button
                variant="light"
                className="cancelar"
                onClick={handleClosePedidos}>
                Cancelar
              </Button>
            </Modal.Body>
          </Modal>
        )}
      </>
    </div>
  );
};

export default Pedidos;
