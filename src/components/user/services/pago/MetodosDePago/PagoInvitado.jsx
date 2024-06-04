import React, { useState, useEffect } from "react";
import { getDataSesionStorega } from "../../../../../utils/getDataStorage";
import { API_HOST } from "../../../../../config/config";
import { useNavigate } from "react-router";
import { Button, Spinner, Modal } from "react-bootstrap";
import { useCarShop, useNotification } from "../../../../../hook";
import axios from "axios";
import { calcularEnvio } from "../../../../../utils/funtionsProducts";
import { NotificationToast } from "../../../../../utils";
import { FaHandHoldingDollar } from "../../../../../assets/icons/reactIcons";

export const PagoInvitado = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn-pago">
        <div className="content">
          <FaHandHoldingDollar className="icon" />
        </div>
        Pagar al recibir
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <div>
          <Modal.Header closeButton></Modal.Header>
          <div className="content-use">
            <Informacion setShow={setShow} />
          </div>
        </div>
      </Modal>
    </>
  );
};

const Informacion = ({ setShow }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { activeStep, setStep, cartItems, setCartItems } = useCarShop();
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const handleClose = () => setShow(false);

  useEffect(() => {
    setData(getDataSesionStorega("DtUerForEnComp"));
  }, []);

  // calcular costos de envio
  const destino = data.destino;
  const costoEnvio = calcularEnvio(destino);

  // Modificar el valor para incluir el costo de envío
  const updatedCartItems = cartItems.map((item) => {
    const valorOriginal = parseInt(item.valor, 10);
    const valorConEnvio = valorOriginal + costoEnvio;

    return {
      ...item,
      valor: valorConEnvio.toFixed(2),
    };
  });

  const finnalyBuy = async () => {
    setLoading(true);
    if (data.length === 0 || cartItems === null) {
      setBgToast("danger");
      setShowToast(true);
      setToastMessage("Algo salio mal, faltan datos para procesar la compra");
      return;
    }
    try {
      const response = await axios.post(`${API_HOST}/finish/buy/invited`, {
        dataUser: data,
        dataProducts: updatedCartItems,
        metodoPago: "contraEntrega",
      });

      if (response.status === 200) {
        setStep(activeStep + 1);
        handleClose(false);
        navigate(`/purchaseProcessCompleted/${response.data.message}`);
        localStorage.setItem("dataUForFact", JSON.stringify(data));
        localStorage.setItem("itemsUForFact", JSON.stringify(cartItems));
        setCartItems([]);
      }
    } catch (error) {
      console.log("Se produjo un error en el servidor", error);
      setBgToast("danger");
      setShowToast(true);
      setToastMessage(
        "No se puedo realizar la compra, por favor intentalo de nuevo"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pago-content">
      <NotificationToast text={"Pago"} />
      <h4>Tenga en cuenta lo siguiente</h4>
      <ul>
        <li className="mb-2">
          En caso de no poder recibir la compra, por favor deje a alguien
          encargado para que la reciba.
        </li>
        <li>
          Al momento de recibir su compra tenga en cuanta que el pago debe ser
          en efectivo.
        </li>
      </ul>
      <div className="buttons-content">
        <Button variant="primary" onClick={handleClose}>
          Cambiar el metodo de pago
        </Button>
        <Button variant="success" onClick={finnalyBuy} disabled={loading}>
          {loading ? (
            <Spinner animation="border" role="status" size="sm" />
          ) : (
            "Continuar"
          )}
        </Button>
      </div>
    </div>
  );
};
