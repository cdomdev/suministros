import { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST } from "../../config/config";
import { formateValue } from "../../utils/funtionsProducts";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const MasVendidos = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_HOST}/list-most-salleds`)
      .then((response) => {
        if (response.status === 200) {
          setProductos(response.data.data);
          console.log(response.data.data);
        }
      })
      .catch((error) => {
        console.log("Error al listar los productos mas vedidos", error);
      });
  }, []);

  function navigateDetail(producto) {
    localStorage.setItem("selectedProduct", JSON.stringify(producto));
    localStorage.setItem("categroyselectedProduct", JSON.stringify(productos));
    navigate(`/suministros/details/${producto.nombre}`);
  }

  return (
    <>
      {productos.map((producto) => (
        <ul key={producto.id} className="card-products">
          <span className="text-ref">REF: {producto.referencia}</span>
          <img
            src={producto.image}
            alt="not found"
            className="img-products"
            loading="lazy"
          />
          <div className="contenido-card">
            <li className="title">{producto.marca}</li>
            <li className="text">{producto.nombre}</li>
            <li className="valor">
              $ {formateValue(parseInt(producto.valor, 10))}
            </li>
          </div>
          <Button onClick={() => navigateDetail(producto)}>Ver producto</Button>
        </ul>
      ))}
    </>
  );
};
