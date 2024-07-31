import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_HOST } from "../../../../config/config";
import { Button } from "react-bootstrap";
import { BsDatabaseX } from "../../../../assets/icons/reactIcons";
import { LazyLoadImage } from "react-lazy-load-image-component";

import axios from "axios";
import {
  formateValue,
  calcalateDiscount,
  navigateDetailOfertas,
} from "../../../../utils/funtionsProducts";

const CardsOfertas = () => {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_HOST}/listar/ofertas`)
        .then((response) => {
          if (response.status === 200) {
            setOfertas(response.data.ofertas || []);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      {ofertas.length === 0 ? (
        <div className="empty-filter">
          <BsDatabaseX className="icon" />
          <span>No hay productos</span>
        </div>
      ) : (
        <div className="contenedor-card">
          {ofertas.map((oferta) => (
            <div key={oferta.id} className="productos-container">
              {oferta.Productos.map((producto) => (
                <ul key={producto.id} className="card-products-ofertas">
                  <div className="header-car">
                    <li className="descuento">{oferta.descuento}%</li>
                    <li className="ref">REF: {producto.referencia}</li>
                  </div>
                  <LazyLoadImage
                    effect="blur"
                    src={producto.image}
                    alt="img"
                    className="image"
                    loading="lazy"
                  />
                  <li className="name">{producto.marca}</li>

                  <li>{producto.nombre}</li>

                  <li className="discount">
                    {" "}
                    $ {formateValue(parseInt(producto.valor, 10))}
                  </li>
                  <li className=" valor">
                    ${" "}
                    {calcalateDiscount(
                      parseInt(producto.valor, 10),
                      oferta.descuento
                    ).toLocaleString("es-CO")}
                  </li>
                  <Link to={`/suministros/details-ofertas/${producto.nombre}`}>
                    <Button
                      onClick={() => navigateDetailOfertas(producto, ofertas)}>
                      Ver producto
                    </Button>
                  </Link>
                </ul>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CardsOfertas;
