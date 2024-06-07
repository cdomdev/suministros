import React, { useState, useEffect } from "react";
import { NotificationToast, getDataSesionStorega } from "../../../../utils";
import { useNotification, useCarShop } from "../../../../hook";
import { IoCartOutline } from "../../../../assets/icons/reactIcons";
import NotProduct from "./NotProduct";
import { formateValue } from "../../../../utils/funtionsProducts";

const Results = () => {
  const [busqueda, setBusqueda] = useState([]);
  const { addToCart } = useCarShop();
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  useEffect(() => {
    setBusqueda(getDataSesionStorega("searchResultProducts"));
  }, []);

  const handleAgregarAlCarrito = (producto) => {
    addToCart({ ...producto, cantidad: 1 });
    setShowToast(true);
    setBgToast("success");
    setToastMessage("Producto agregado al carrito");
  };

  return (
    <>
      {busqueda.length > 0 && (
        <span className="text-center total ">{busqueda.length} Productos</span>
      )}
      {busqueda.length === 0 ? (
        <NotProduct />
      ) : (
        <div className="contenedor-card">
          <NotificationToast text={"Resultado de busqueda"} />
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
