import React from "react";
import { Link } from "react-router-dom";

const SuccessRequest = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="container-request">Cargando...</div>;
  }

  return (
    <div className="container-request">
      <h1>{`¡Hola ${data.name} tu informacion ah sido valida con exito!`}</h1>
      <p>
        {`
          En los proximos minutos enviaremos un correo a tu cuenta ${data.email} con las
          instrucciones para ingresar una nueva contraseña
          `}
      </p>

      <Link to={"/suministros/home"}>Volver a la pagina de inicio</Link>
    </div>
  );
};

export default SuccessRequest;
