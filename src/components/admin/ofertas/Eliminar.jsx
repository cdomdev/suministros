import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoIosWarning } from "react-icons/io";
import { useNotification } from "../../../hook";
import { NotificationToast } from "../../common";
import { API_HOST } from "../../../config/config";
import { api } from "../../../config/axios.conf";

export const Eliminar = ({ oferta, setOfertaListado }) => {
  const [showModal, setShowModal] = useState(false);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function handleDeleteOferta() {
    api
      .delete(`${API_HOST}/api/oferta/delete/${oferta.id}`, {
        data: { id: oferta.id },
      })
      .then((response) => {
        if (response.status === 200) {
          setOfertaListado(response.data.ofertas);
          setBgToast("success");
          setShowToast(true);
          setToastMessage("Oferta eliminada con exito");
          setShowModal(false);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          setBgToast("danger");
          setShowToast(true);
          setToastMessage("No tienes los permisos para esta operacion");
        } else {
          setBgToast("danger");
          setShowToast(true);
          setToastMessage(
            "Hubo un error al eliminar la oferta, intentalo de nuevo"
          );
        }
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      });
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Eliminar
      </Button>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-ofertas-delete">
        <NotificationToast text={"Eliminaste un producto"} />
        <Modal.Title className="title-modal-delete">
          Esta a punto de eliminar una oferta
        </Modal.Title>
        <div className="body-modal-ofertas-delete">
          <IoIosWarning className="w-ofertas" />
          <p className="text-delete-oferta">
            Esta seguro de querer elminar la oferta de:{" "}
            <strong className="t">{oferta.nombre}</strong>{" "}
          </p>
        </div>
        <div className="content-button-ofertas">
          <Button variant="danger" onClick={handleDeleteOferta}>
            Eliminar oferta
          </Button>
          <Button onClick={handleClose} variant="light" className="delete">
            Cancelar
          </Button>
        </div>
      </Modal>
    </>
  );
};
