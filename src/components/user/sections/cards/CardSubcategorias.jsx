import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsDatabaseX } from "../../../../assets/icons/reactIcons";
import { obtenerMarcasUnicas } from "../../../../utils";
import { Marcas, Precio } from "./Filtros";
import { API_HOST } from "../../../../config/config";
import axios from "axios";
import { formateValue } from "../../../../utils/funtionsProducts";

const CardSubcategorias = ({
  RutaSubCategoria,
  nombreSubcategoria,
  unidad,
}) => {
  const [productos, setProductos] = useState([]);
  const [marcasUnicas, setMarcasUnicas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [marcasSeleccionada, setMarcasSeleccionada] = useState([]);
  const [precioSeleccionado, setPrecioSeleccionado] = useState("");

  const encodedSubcategorias = encodeURIComponent(RutaSubCategoria);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_HOST}/subcategorias/${encodedSubcategorias}`)
        .then((response) => {
          if (response.status === 200) {
            setProductos(response.data.productos);
          }
        })
        .catch((error) => {
          console.log("Error en la solicitud", error);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Extraer marcas únicas de los productos
    setMarcasUnicas(obtenerMarcasUnicas(productos));
  }, [productos]);

  // Función para manejar cambios en las marcas seleccionadas
  const handleMarcaChange = (marca) => {
    // Verificar si la marca ya está seleccionada
    if (marcasSeleccionada.includes(marca)) {
      // Si está seleccionada, la eliminamos del estado de marcas seleccionadas
      setMarcasSeleccionada(marcasSeleccionada.filter((m) => m !== marca));
    } else {
      // Si no está seleccionada, la agregamos al estado de marcas seleccionadas
      setMarcasSeleccionada([...marcasSeleccionada, marca]);
    }
  };

  function navigateDetail(producto) {
    localStorage.setItem("selectedProduct", JSON.stringify(producto));
    localStorage.setItem("categroyselectedProduct", JSON.stringify(productos));
    navigate(`/suministros/details/${producto.nombre}`);
  }

  const handlePrecioChange = (e) => {
    setPrecioSeleccionado(e.target.value);

    if (e.target.value === "menor-mayor") {
      // Ordenar de menor a mayor
      const productosOrdenados = [...productos].sort(
        (a, b) => parseFloat(a.valor) - parseFloat(b.valor)
      );
      setProductos(productosOrdenados);
    } else if (e.target.value === "mayor-menor") {
      // Ordenar de mayor a menor
      const productosOrdenados = [...productos].sort(
        (a, b) => parseFloat(b.valor) - parseFloat(a.valor)
      );
      setProductos(productosOrdenados);
    }
  };

  const handleSelectChange = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };

  const productosFiltrados = productos.filter((producto) => {
    const categoriaPass =
      !categoriaSeleccionada || producto.marca === categoriaSeleccionada;
    const marcaPass =
      marcasSeleccionada.length === 0 ||
      marcasSeleccionada.includes(producto.marca);
    return categoriaPass && marcaPass;
  });

  return (
    <>
      <div className="filtros">
        <h2>{nombreSubcategoria}</h2>
        <span>Filtros*</span>
        <h3>Marca</h3>
        <Marcas
          handleMarcaChange={handleMarcaChange}
          marcaSeleccionada={marcasSeleccionada}
          marcasUnicas={marcasUnicas}
        />
      </div>

      <div className="header">
        <div className="count-products">
          <div className="count">
            <span>{productos.length}</span>
          </div>
          <p>Productos</p>
        </div>
        <div className="filter-form">
          <Precio
            handlePrecioChange={handlePrecioChange}
            precioSeleccionado={precioSeleccionado}
          />
        </div>
        <div className="mobile-select">
          <Form.Select
            aria-label="Default select example"
            value={categoriaSeleccionada}
            onChange={handleSelectChange}
            className="select-mobile">
            <option value="">Todas las marcas</option>
            {marcasUnicas.map((marca, index) => (
              <option key={index} value={marca}>
                {marca}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
      <div className="contenedor-card">
        {productos.length === 0 ? (
          <p>No hay productos disponibles...</p>
        ) : (
          <>
            {productosFiltrados.length === 0 && (
              <span className="empty-filter">
                <BsDatabaseX className="icon" /> <br />
                No hay productos
              </span>
            )}
            {productosFiltrados.map((producto) => (
              <ul key={producto.id} className="card-products">
                <span className="text-ref">REF: {producto.referencia}</span>
                <LazyLoadImage
                  effect="blur"
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
                    <span className="unidad"> * {unidad}</span>
                  </li>
                </div>
                <Button onClick={() => navigateDetail(producto)}>
                  Ver producto
                </Button>
              </ul>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default CardSubcategorias;
