import React from "react";
import { getDataStorage } from "../../../utils/getDataStorage";
import { Button } from "react-bootstrap";
import { useNotification } from "../../../hook";


export const Delete = ({ setListadoState, id }) => {
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const borrarProducto = () => {
    let productosAlmacenadas = getDataStorage("productos");
    let nuevoListadoProductos = productosAlmacenadas.filter(
      (producto) => producto.id !== id
    );
    setListadoState([...nuevoListadoProductos]);
    localStorage.removeItem(`productos${id}`);
    setBgToast("danger");
    setToastMessage("Se elimino un producto");
    setShowToast(true);
    if (nuevoListadoProductos.length === 0) {
      localStorage.removeItem("productos");
    } else {
      localStorage.setItem("productos", JSON.stringify(nuevoListadoProductos));
    }
  };
  return (
    <Button
      className="btn-custom"
      variant="danger"
      onClick={() => borrarProducto()}>
      Borrar
    </Button>
  );
};
