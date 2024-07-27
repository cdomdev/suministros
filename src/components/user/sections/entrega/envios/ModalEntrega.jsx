import { Modal, Button } from "react-bootstrap";

export const ModalEntrega = ({
  handleShow,
  handleClose,
  show,
  content,
  texto,
  variant,
  className,
}) => {
  return (
    <>
      <Button variant={variant} onClick={handleShow} className={className}>
        {texto}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <div>
          <Modal.Header
            style={{ border: "none", padding: "10px 20px" }}
            closeButton></Modal.Header>
          <h4>Datos para el envio</h4>
          <hr />
          <div className="content-use">{content}</div>
        </div>
      </Modal>
    </>
  );
};
