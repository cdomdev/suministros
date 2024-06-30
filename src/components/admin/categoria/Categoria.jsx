import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Crear, Eliminar, Listar } from "./LayoutCategorys";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  return (
    <>
      <Layout
        title={"Categorias"}
        component={
          <div className="categorias">
            <div>
              <Crear
                setCategorias={setCategorias}
                url={"categories"}
                guy={"categoria"}
              />
              <Eliminar
                categorias={categorias}
                setCategorias={setCategorias}
                url={"categories"}
                guy={"categoria"}
              />
            </div>
            <div>
              <Listar
                categorias={categorias}
                setCategorias={setCategorias}
                url={"categories"}
                guy={"categorias"}
              />
            </div>
          </div>
        }
      />
    </>
  );
};

export default Categorias;
