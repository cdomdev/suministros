import React, { useEffect, useState } from "react";
import { api } from "../../../config/axios.conf";
import { API_HOST } from "../../../config/config";

export const MostSalled = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get(`${API_HOST}/api/see-best-sallers`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log("Error al lista los productos mas vendidos", error);
      });
  }, []);
  return (
    <div className="balans-tabale">
      <div className="contenedor-card">
        {products.length === 0 ? (
          <p>No hay productos </p>
        ) : (
          <>
            {products.length === 0 && (
              <div className="empty-filter">
                <span>No hay productos</span>
              </div>
            )}
            {products.map((producto, index) => (
              <ul key={producto.id} className="card-products">
                <span>{index + 1}</span>
                <img
                  src={producto.image}
                  alt="not found"
                  className="img-products"
                />
                <li className="text">{producto.nombre}</li>-
                <li className="title">{producto.title}</li>-
                <li className="text-ref">{producto.referencia}</li>-
                <li className="valor">$ {producto.valor}</li> -
                <li className="valor">{producto.sales_count}</li>
              </ul>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
