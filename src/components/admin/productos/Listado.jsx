import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Editar } from "./Editar";
import { Delete } from "./Delete";
import { getDataStorage } from "../../../utils/getDataStorage";
import { NotificationToast } from "../../../utils/ComponentsUtils";
export const Listado = ({ listadoState, setListadoState }) => {
  useEffect(() => {
    setListadoState(getDataStorage("productos"));
  }, []);

  return (
    <>
      <NotificationToast text={"Nuevos productos"} />

      {listadoState != null ? (
        listadoState.map((producto, index) => {
          return (
            <article key={producto.id || index} className="container-card">
              <div className="productos-cards">
                {producto.image && <img src={producto.image} alt="Preview" />}
                <div className="details">
                  <span>
                    <strong>Marca: </strong>
                    {producto.title}
                  </span>
                  <span>
                    <strong>Nombre: </strong>
                    {producto.nombre}
                  </span>
                  <span>
                    <strong>Valor: $ </strong>
                    {producto.valor}
                  </span>
                  <span>
                    <strong>Cantidad: </strong>
                    {producto.cantidad}
                  </span>
                  <span>
                    <strong>Referencia: </strong>
                    {producto.referencia}
                  </span>
                  <span>
                    <strong>Categoria: </strong>
                    {producto.categoria}
                  </span>
                  <span>
                    <strong>Subcategoria: </strong>
                    {producto.subCategoria}
                  </span>
                  <strong>Descripción:</strong>
                  <p className="description">{producto.description}</p>
                </div>
                <div className="content-btn-card">
                  <Editar
                    producto={producto}
                    setListadoState={setListadoState}
                  />
                  <Delete id={producto.id} setListadoState={setListadoState} />
                </div>
              </div>
            </article>
          );
        })
      ) : (
        <div className="contendor-alter-products-card d-flex">
          <span className="text-shadow" style={{ margin: "auto" }}>
            Agregue nuevos productos para verlos aquí.
          </span>
        </div>
      )}
    </>
  );
};
