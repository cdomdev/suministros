import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoIosWarning } from "react-icons/io";
import axios from "axios";
import { useNotification } from "../../../hook";
import { NotificationToast } from "../../../utils";
import { API_HOST } from "../../../config/config";

export const Eliminar = ({ oferta, setOfertaListado, ofertaListado }) => {
  const [showModal, setShowModal] = useState(false);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function handleDeleteOferta() {
    axios
      .delete(`${API_HOST}/api/oferta/${oferta.id}/eliminar`, {
        data: { id: oferta.id },
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const updatedOfertas = ofertaListado.filter(
            (oferta) => oferta.id !== oferta.id
          );
          setOfertaListado(updatedOfertas);
          setBgToast("success");
          setShowToast(true);
          setToastMessage("Se elimino una oferta");
          setTimeout(() => {
            setShowModal(false);
          }, 1500);
        }
      })
      .catch((error) => {
        console.error(error);
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("No se pudo eliminar la oferta");
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
            Esta seguro de elminar:{" "}
            <strong className="t">{oferta.nombre}</strong>{" "}
          </p>
        </div>
        <div className="content-button-ofertas">
          <Button onClick={handleClose} variant="secondary">
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDeleteOferta}>
            Eliminar oferta
          </Button>
        </div>
      </Modal>
    </>
  );
};
