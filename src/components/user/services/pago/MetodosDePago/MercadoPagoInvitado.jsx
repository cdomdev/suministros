import React, { useEffect, useState } from "react";
import mercadopagoIMg from "../../../../../assets/images/mercadopago.webp";
import { NotificationToast, getDataSesionStorega } from "../../../../../utils";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useCarShop, useNotification } from "../../../../../hook";
import { API_HOST } from "../../../../../config/config";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { calcularEnvio } from "../../../../../utils/funtionsProducts";

export const MercadoPagoInvitado = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();
  const { cartItems } = useCarShop();

  initMercadoPago("TEST-1eb0203c-5a68-4143-8770-2a87ea70ccd9", {
    locale: "es-CO",
  });

  useEffect(() => {
    setData(getDataSesionStorega("DtUerForEnComp"));
  }, []);

  // calcular costos de envio
  const destino = data.destino;
  const costoEnvio = calcularEnvio(destino);

  // Calcular el valor total de los productos en el carrito
  const valorTotalProductos = cartItems.reduce((total, item) => {
    return total + parseInt(item.valor, 10);
  }, 0);

  // Calcular el valor total incluyendo el costo de envío
  const valorTotalConEnvio = valorTotalProductos + costoEnvio;

  // Crear un objeto con los productos originales y el total con envío
  const updatedCart = {
    items: cartItems.map((item) => ({
      ...item,
      valor: parseInt(item.valor, 10).toFixed(2),
    })),
    envio: costoEnvio,
    valorTotal: valorTotalProductos.toFixed(2),
    valorTotalConEnvio: valorTotalConEnvio.toFixed(2),
  };

  const createOrder = async () => {
    try {
      if (!cartItems || cartItems.length === 0) {
        setBgToast("danger");
        setToastMessage("No hay productos para procesar un pago");
        setShowToast(true);
        return;
      }

      setIsLoading(true);
      const response = await axios.post(
        `${API_HOST}/finish/buy/mercadopago-invited`,
        {
          updatedCart,
          data,
          metodoPago: "Mercadopago",
        }
      );
      if (response.status === 200) {
        const { init_point } = response.data;
        window.location.href = init_point;
      }
    } catch (e) {
      console.log(e);
      setBgToast("danger");
      setToastMessage("No se puedo procesar el pago");
      setShowToast(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mercadopago-content">
      <NotificationToast text={"Pago"} />
      <button onClick={createOrder} className="btn-mercadopago">
        {isLoading ? (
          <div className="spinner-container">
            <Spinner animation="border" role="status" size="sm" />
          </div>
        ) : (
          <>
            <img src={mercadopagoIMg} alt="img" className="mercadopago-img" />
            Pagar con Mercado Pago
          </>
        )}
      </button>
      <p>Paga de forma segura</p>
    </div>
  );
};
