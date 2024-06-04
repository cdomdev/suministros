import React, { useState } from "react";
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
              <Crear setCategorias={setCategoria} url={"crear/sub-categoria"} />
              <Eliminar
                categorias={categorias}
                setCategorias={setCategoria}
                url={"sub-categoria"}
              />
            </div>
            <div>
              <Listar
                categorias={categorias}
                setCategorias={setCategoria}
                url={"sub-categorias"}
              />
            </div>
          </div>
        }
      />
    </>
  );
};
export default Subcategorias;
