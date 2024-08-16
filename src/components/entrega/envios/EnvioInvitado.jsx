import { useState } from "react";
import { FaTruck } from "../../../assets/icons/reactIcons";
import { ModalEntrega } from "./ModalEntrega";
import { InvitadoDate } from "./InvitadoDate";

export const EnvioInvitado = () => {
  const [check, setCheck] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [show, setshow] = useState(false);

  const handleShow = () => setshow(true);
  const handleClose = () => setshow(false);

  const handleToggle = () => {
    setCheck(!check);
    setExpanded(!expanded);
  };

  return (
    <div className={`envio-programado ${expanded ? "expanded" : ""}`}>
      <div className="check-container">
        <input
          type="checkbox"
          id="envio-normal-checkbox"
          checked={check}
          onChange={handleToggle}
          className="hidden-checkbox"
        />
        <div className="contenedor-label-delivery">
          <div className="label-de" onClick={handleToggle}>
            <label
              className={`custom-checkbox ${check ? "checked" : ""}`}
              htmlFor="envio-normal-checkbox">
              <span className="circle" />
            </label>
            <span>
              <FaTruck className="truck" />
              Envío
            </span>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="contenido">
          <span>Ingresa la informacion de quien recibe el pedido</span>
          <div>
            <ModalEntrega
              variant="outline-primary"
              handleShow={handleShow}
              handleClose={handleClose}
              show={show}
              content={<InvitadoDate handleClose={handleClose} />}
              texto="Agregar Informacion"
            />
          </div>
        </div>
      )}
    </div>
  );
};
