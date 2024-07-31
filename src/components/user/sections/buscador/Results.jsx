import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NotificationToast } from "../../../common";
import { useCarShop, useNotification } from "../../../../hook";
import { IoCartOutline } from "../../../../assets/icons/reactIcons";
import NotProduct from "./NotProduct";
import { formateValue } from "../../../../utils/funtionsProducts";
import axios from "axios";
import { API_HOST } from "../../../../config/config";

const Results = () => {
  const [busqueda, setBusqueda] = useState([]);
  const { query } = useParams();
  const { addToCart } = useCarShop();
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.post(`${API_HOST}/busqueda-productos`, {
          query: query,
        });
        if (response.data.resultados) {
          const dataResponse = response.data.resultados;
          setBusqueda(dataResponse);
        } else {
          setBusqueda([]);
        }
      } catch (error) {
        console.error("Error al buscar productos:", error);
        setBusqueda([]);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleAgregarAlCarrito = (producto) => {
    addToCart({ ...producto, cantidad: 1 });
    setShowToast(true);
    setBgToast("success");
    setToastMessage("Producto agregado al carrito");
  };

  return (
    <>
      {busqueda && busqueda.length > 0 && (
        <span className="text-center total ">{busqueda.length} Productos</span>
      )}
      {!busqueda || busqueda.length === 0 ? (
        <NotProduct />
      ) : (
        <div className="contenedor-card">
          <NotificationToast text={"Resultado de búsqueda"} />
          {busqueda.map((producto) => (
            <ul key={producto.id} className="card-products">
              <span className="text-ref">REF: {producto.referencia}</span>
              <img
                src={producto.image}
                alt="not found"
                className="img-products"
              />
              <div className="contenido-card">
                <li className="title">{producto.title}</li>
                <li className="text">{producto.nombre}</li>
                <li className="valor">
                  $ {formateValue(parseInt(producto.valor))}{" "}
                  <span className="unidad"></span>
                </li>
              </div>
              <div className="icons">
                <IoCartOutline
                  className="icon"
                  onClick={() => handleAgregarAlCarrito(producto)}
                />
              </div>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default Results;
