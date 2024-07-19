import { useState, useEffect } from "react";
import { Editar } from "./Editar";
import { Elminar } from "./Eliminar";
import { Actualizar } from "./Actualizar";
import Layout from "../layout/Layout";
import { Filtros } from "./Filtros";
import { NotificationToast } from "../../../utils";
import { LoaderComponent } from "../../../utils";
import { API_HOST } from "../../../config/config";
import { formateValue } from "../../../utils/funtionsProducts";
import { api } from "../../../config/axios.conf";

const GestionInventary = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [precioSeleccionado, setPrecioSeleccionado] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `${API_HOST}/api/inventary/list-products`
        );
        setProductos(response.data.productos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchData();
  }, []);

  const handlePrecioChange = (e) => {
    setPrecioSeleccionado(e.target.value);

    if (e.target.value === "menor-mayor") {
      const productosOrdenados = [...productos].sort(
        (a, b) => parseFloat(a.valor) - parseFloat(b.valor)
      );
      setProductos(productosOrdenados);
    } else if (e.target.value === "mayor-menor") {
      const productosOrdenados = [...productos].sort(
        (a, b) => parseFloat(b.valor) - parseFloat(a.valor)
      );
      setProductos(productosOrdenados);
    }
  };

  const productosFiltrados = productos.filter((producto) => {
    return (
      !categoriaSeleccionada ||
      producto.subcategoria.nombre.trim() === categoriaSeleccionada
    );
  });

  return (
    <Layout
      title={"Gestion del inventario"}
      component={
        <div className="body-components-inventary">
          <NotificationToast text={"Actualizacion de productos"} />
          <div className="filtros-content">
            <span>Filtrar por: </span>
            <div className="filtros">
              <Filtros
                categoriaSeleccionada={categoriaSeleccionada}
                handlePrecioChange={handlePrecioChange}
                precioSeleccionado={precioSeleccionado}
                productos={productos}
                setCategoriaSeleccionada={setCategoriaSeleccionada}
              />
            </div>
          </div>
          <div className="contenedor-inventario">
            {productos && productos.length === 0 ? (
              <LoaderComponent />
            ) : productos.length === 0 ? (
              <p className="chage-text">No hay productos disponibles</p>
            ) : (
              <>
                {productosFiltrados.map((producto) => (
                  <div key={producto.id} className="card-products-inventario">
                    <div className="contenedor-det-img">
                      <div className="content-img">
                        <img
                          src={producto.image}
                          alt="producto"
                          className="img-productos-inventario"
                        />
                        <span className="nombre">{producto.nombre}</span>
                      </div>
                      <div className="details">
                        <span>
                          <strong>Marca:</strong>
                          {producto.marca}
                        </span>
                        <strong>Descripción:</strong>
                        <p>{producto.description}</p>
                        <span>
                          <strong>Precio: </strong> $
                          {formateValue(parseInt(producto.valor, 10))}
                        </span>
                        <span>
                          <strong>Referencia: </strong> {producto.referencia}
                        </span>
                        <span>
                          <strong>Cantidad en inventario: </strong>
                          {producto.Inventarios.length > 0
                            ? producto.Inventarios[0].cantidad
                            : 0}
                        </span>
                        <span>
                          <strong>Categoria: </strong>
                          {producto.categoria.nombre || "Sin categoría"}
                        </span>
                        <span>
                          <strong>Subcategoria: </strong>
                          {producto.subcategoria.nombre || "Sin subcategoría"}
                        </span>
                      </div>
                    </div>
                    <div className="container-btn">
                      <Actualizar
                        producto={producto}
                        setProductos={setProductos}
                      />
                      <Editar
                        producto={producto}
                        currentStock={
                          producto.Inventarios.length > 0
                            ? producto.Inventarios[0].cantidad
                            : 0
                        }
                        setProductos={setProductos}
                      />
                      <Elminar
                        producto={producto}
                        setProductos={setProductos}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      }
    />
  );
};

export default GestionInventary;
