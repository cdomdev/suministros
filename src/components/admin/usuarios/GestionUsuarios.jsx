import React from "react";
import  Layout  from "../layout/Layout";
import { Invitados } from "./Invitados";
import Usuarios from "./Usuarios";

const GestionUsuarios = () => {
  return (
    <>
      <Layout
        title={"Gestionar ordenes de compra"}
        component={
          <div className="container-data-users">
            <Usuarios />
            <Invitados/>
          </div>
        }
      />
    </>
  );
};

export default GestionUsuarios;