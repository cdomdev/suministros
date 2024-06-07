import { useState } from "react";
import React from "react";
import { Button, Spinner } from "react-bootstrap";

export const ProbarComponentes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleGuardarProducto = () => {
    console.log("cargando");
  };
  return (
    <>
      <div className="container-btn-save">
        <Button variant="success" onClick={handleGuardarProducto}>
          {isLoading ? (
            <div className="spinner-container">
              <>Guardando productos</>
              <Spinner animation="border" role="status" size="sm" />
            </div>
          ) : (
            <>Guardar productos en la base de datos</>
          )}
        </Button>
      </div>
      ;
    </>
  );
};
