import { Button, Spinner } from "react-bootstrap";
import { API_HOST } from "../../../config/config";
import { useNotification } from "../../../hook";
import { useState } from "react";
import { api } from "../../../config/axios.conf";

export const GuardarProductos = ({ listadoState, setListadoState }) => {
  const { setShowToast, setToastMessage, setBgToast } = useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const handleGuardarProducto = async () => {
    try {
      setIsLoading(true);
      if (!listadoState || listadoState.length === 0) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("No hay productos en la lista para guardar");
        return;
      }
      const updatedList = listadoState.map((producto) => ({
        ...producto,
        displayImages: undefined,
        image: producto.image,
      }));

      const response = await api.post(`${API_HOST}/api/save-news-products`, {
        productos: updatedList,
      });

      if (response.status === 200) {
        setBgToast("success");
        setShowToast(true);
        setToastMessage("Productos guardados con exito");
        setListadoState([]);
        localStorage.removeItem("productos");
      } else {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage(
          "No se pudieron guardar los productos, inténtalo de nuevo"
        );
      }
    } catch (error) {
      if (error.response.status === 403) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("No tienes permiso para esta operacion");
      } else if (error.response.status === 500) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("Error interno en el servidor");
      }
      setBgToast("danger");
      setShowToast(true);
      setToastMessage(
        "Algo salió mal al guardar los productos, inténtalo de nuevo"
      );
      console.error("Error al guardar el producto:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container-btn-save">
        <Button variant="success" onClick={handleGuardarProducto}>
          {isLoading ? (
            <div className="spinner-container">
              <p>Guardando productos</p>
              <Spinner animation="border" role="status" size="sm" />
            </div>
          ) : (
            <>Guardar productos en la base de datos</>
          )}
        </Button>
      </div>
    </>
  );
};
