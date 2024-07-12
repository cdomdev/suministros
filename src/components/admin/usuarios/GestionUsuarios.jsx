import React from "react";
import Layout from "../layout/Layout";
import Usuarios from "./Usuarios";

const GestionUsuarios = () => {
  return (
    <>
      <Layout
        title={"Gestion de pedidos"}
        component={
          <div className="container-data-users">
            <Usuarios />
          </div>
        }
      />
    </>
  );
};

export default GestionUsuarios;
