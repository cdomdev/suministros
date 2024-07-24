import { useEffect } from "react";
import { Editar } from "./Editar";
import { Delete } from "./Delete";
import { getDataStorage } from "../../../utils/getDataStorage";
import { NotificationToast } from "../../../utils";
import { formateValue } from "../../../utils/funtionsProducts";

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
                    {producto.marca}
                  </span>
                  <span>
                    <strong>Nombre: </strong>
                    {producto.nombre}
                  </span>
                  <span>
                    <strong>Valor: $ </strong>
                    {formateValue(parseInt(producto.valor))}
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
                    {producto.subcategoria}
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
        <div className="contendor-alter-products-card d-flex text-center">
          <span className="text-center text-shadow " style={{ margin: "auto" }}>
            Agregue nuevos productos para verlos aquí.
          </span>
        </div>
      )}
    </>
  );
};
