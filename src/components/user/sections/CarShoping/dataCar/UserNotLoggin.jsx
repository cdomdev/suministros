import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { LoginModal } from "../../../services/autenticacion";

export const UserNotLoggin = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const irProcutos = () => {
    navigate("/suministros/construccionyremodelacion");
  };

  return (
    <div className="loged-user-from-car">
      <div className="content-modal-for-loggin">
        <div>
          <span>
            <strong> Si tienes cuenta, inicia sesión</strong> para ver tus
            productos o continua navegando por nuestro sitio.
          </span>
        </div>
        <div className="contenedor-btn-custome">
          <Button
            className="btn-custome"
            variant="outline-primary"
            onClick={irProcutos}>
            Agregar productos
          </Button>
          <LoginModal
            setIsLoggedIn={setIsLoggedIn}
            controlComponent={(handleShow) => (
              <Button variant="primary" onClick={handleShow}>
                Iniciar sesion
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
};
