import { useState } from "react";
import { Listar, Crear, Eliminar } from "../categoria/LayoutCategorys";
import Layout from "../layout/Layout";

const Subcategorias = () => {
  const [categorias, setCategoria] = useState([]);

  return (
    <>
      <Layout
        title={"Subcategorias"}
        component={
          <div className="categorias">
            <div>
              <Crear
                setCategorias={setCategoria}
                url={"subcategories"}
                guy={"subcategoria"}
              />
              <Eliminar
                categorias={categorias}
                setCategorias={setCategoria}
                url={"subcategories"}
                guy={"subcategoria"}
              />
            </div>
            <div>
              <Listar
                categorias={categorias}
                setCategorias={setCategoria}
                url={"subcategories"}
                guy={"subcategorias"}
              />
            </div>
          </div>
        }
      />
    </>
  );
};
export default Subcategorias;
