import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsDatabaseX } from "../../../../../public/icons/reactIcons";
import { useNavigate } from "react-router-dom";
import { obtenerMarcasUnicas, obtenerSubCategorias } from "../../../../utils";
import { Categorias, Marcas } from "./Filtros";
import { Button } from "react-bootstrap";
import { API_HOST } from "../../../../config/config";
import axios from "axios";
import { formateValue } from "../../../../utils/funtionsProducts";

const CardCategorias = ({ rutaCategoria, nombreCategoria }) => {
  const [categorias, setCategorias] = useState([]);
  const [subCategorias, setSubCategorias] = useState([]);
  const [marcasUnicas, setMarcasUnicas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [marcaSeleccionada, setMarcasSeleccionada] = useState("");

  const navigate = useNavigate();

  const encodedCategorias = encodeURIComponent(rutaCategoria);

  // Solcicitud de las categorias
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_HOST}/categorias/${encodedCategorias}`)
        .then((response) => {
          if (response.status === 200) {
            setCategorias(response.data.productos);
          }
        })
        .catch((e) => {
          console.log("Se presento un error en la solicitud", e);
        });
    };
    fetchData();
  }, []);

  // // Extraer las categorias de los productos
  useEffect(() => {
    setSubCategorias(obtenerSubCategorias(categorias));
    setMarcasUnicas(obtenerMarcasUnicas(categorias));
  }, [categorias]);

  // Función para manejar cambios de acuerdo a las subcategorias
  const handleCategoriaChange = (subcategoria) => {
    // Verificar si la subcategoría ya está seleccionada
    if (categoriaSeleccionada === subcategoria) {
      // Si está seleccionada, la deseleccionamos
      setCategoriaSeleccionada("");
    } else {
      // Si no está seleccionada, la seleccionamos
      setCategoriaSeleccionada(subcategoria);
    }
  };

  // Función para manejar cambios de acuerdo a las marcas en la subcategorias
  const handleMarcaChange = (marca) => {
    // Verificar si la marca ya está seleccionada
    if (marcaSeleccionada === marca) {
      // Si está seleccionada, la deseleccionamos
      setMarcasSeleccionada("");
    } else {
      // Si no está seleccionada, la seleccionamos
      setMarcasSeleccionada(marca);
    }
  };

  // Filtrar productos basados en la subcategoría seleccionada
  const productosFiltro = categorias.filter((producto) => {
    const subcategoria =
      !categoriaSeleccionada ||
      producto.subcategoria.nombre === categoriaSeleccionada;
    const marca =
      marcaSeleccionada.length === 0 ||
      marcaSeleccionada.includes(producto.marca);
    return marca && subcategoria;
  });

  function navigateDetail(producto) {
    localStorage.setItem("selectedProduct", JSON.stringify(producto));
    localStorage.setItem("categroyselectedProduct", JSON.stringify(categorias));
    navigate(`/suministros/details/${producto.nombre}`);
  }

  return (
    <>
      <div className="filtros">
        <h2>{nombreCategoria}</h2>
        <span>Filtros*</span>
        <h3>Categorias</h3>
        <Categorias
          categoriaSeleccionada={categoriaSeleccionada}
          handleCategoriaChange={handleCategoriaChange}
          subCategorias={subCategorias}
        />

        <h3>Marcas</h3>

        <Marcas
          handleMarcaChange={handleMarcaChange}
          marcaSeleccionada={marcaSeleccionada}
          marcasUnicas={marcasUnicas}
        />
      </div>
      <div className="header" style={{ marginTop: "-2em" }}>
        <div className="count-products">
          <div className="count">
            <p>{categorias.length}</p>
          </div>
          <p>Productos</p>
        </div>
        <div className="filter-form"></div>
        <div className="mobile-select">
          <p>Encuentra todos los productos que necesitas</p>
        </div>
      </div>
      <div className="contenedor-card">
        {categorias.length === 0 ? (
          <p>No hay productos </p>
        ) : (
          <>
            {productosFiltro.length === 0 && (
              <div className="empty-filter">
                <BsDatabaseX className="icon" />
                <span>No hay productos</span>
              </div>
            )}
            {productosFiltro.map((producto) => (
              <ul key={producto.id} className="card-products">
                <span className="text-ref">REF: {producto.referencia}</span>
                <LazyLoadImage
                  src={producto.image}
                  effect="blur"
                  alt="not found"
                  className="img-products"
                  loading="lazy"
                />
                <div className="contenido-card">
                  <li className="title">{producto.marca}</li>
                  <li className="text">{producto.nombre}</li>
                  <li className="valor">
                    $ {formateValue(parseInt(producto.valor, 10))}
                    <span className="unidad"> * UN</span>
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

export default CardCategorias;
