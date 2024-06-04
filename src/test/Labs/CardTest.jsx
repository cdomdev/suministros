import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { API_HOST } from "../../config/config";
import axios from "axios";

const CardTest = () => {
  const [categorias, setCategorias] = useState([]);

  // Solcicitud de lar categorias
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_HOST}/categoria-padre/construccionyremodelacion`)
        .then((response) => {
          if (response.status === 200) {
            setCategorias(response.data.productos);
          }
        })
        .catch((e) => {
          console.log("Se presento un error en la solicitud");
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container contenedor-grid-products">
        <div
          className="contenedor-card"
          style={{
            border: "solid 1px",
            display: "flex",
            flexWrap: "wrap",
            padding: "10px",
            gap: "10px",
            justifyContent: "center",
          }}>
          {categorias.map((producto) => (
            <ul
              key={producto.id}
              className="card-products"
              style={{
                border: "solid 1px #ccc",
                width: "250px",
                listStyle: "none",
                textAlign: "center ",
                padding: "8px",
              }}>
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
                  $ {producto.valor}
                  <span className="unidad"> * UN</span>
                </li>
              </div>
              <Button>Ver producto</Button>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardTest;
