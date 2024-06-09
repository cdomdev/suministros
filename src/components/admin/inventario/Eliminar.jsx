import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { CiWarning } from "react-icons/ci";
import axios from "axios";
import { useNotification } from "../../../hook";
import { NotificationToast } from "../../../utils";
import { API_HOST } from "../../../config/config";

export const Elminar = ({ producto, setProductos }) => {
  const [showModal, setShowModal] = useState(false);
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  //   solcitud para elminar producto seleccionado

  const handleDelete = () => {
    axios
      .delete(`${API_HOST}/api/productos/${producto.id}/eliminar`, {
        data: { producto_Id: producto.id },
      })
      .then((responseProducto) => {
        if (responseProducto.status === 200) {
          setProductos(responseProducto.data.daleteUpdate);
          setBgToast("success");
          setToastMessage("¡Se elimino un producto!");
          setShowToast(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setBgToast("danger");
        setToastMessage(
          "¡Hubo un error al eliminar el producto, intentalo de nuevo!"
        );
        setShowToast(true);
      });
  };

  return (
    <>
      <Button
        variant="outline-danger"
        className="btn-custome-inventary"
        onClick={() => setShowModal(true)}>
        Eliminar
      </Button>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        className="modal-delete-inventary">
        <NotificationToast text={"Eliminaste productos"} />
        <Modal.Header>
          <Modal.Title className="title-delete-modal">
            ¡Esta apunto de eliminar un producto!
          </Modal.Title>
        </Modal.Header>
        <hr />
        <Modal.Body className="modal-body-delete-inventary">
          <CiWarning className="icon-warning-modal-delete" />
          <span>Se eliminara la cantidad total en el inventario.</span>
          <p className="warning">
            !Esta seguro de querer eliminar
            <strong> {producto.nombre}</strong> con una cantidad en el
            inventario de
            <strong> {producto.Inventarios[0].cantidad} productos</strong>!
          </p>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button variant="danger" onClick={handleDelete}>
            Elimininar producto
          </Button>
          <Button
            variant="secondary"
            className="mt-1"
            onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
