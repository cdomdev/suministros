import { Link } from "react-router-dom";

const ResetSucces = () => {
  return (
    <div className="container-recovery">
      <div className="container-response">
        <h1>
          Tu contraseña se actuilizo con exito, ya puedes iniciar sesion en
          Suministros
        </h1>
        <Link to={"/suministros/home"}>Volver a la pagina de inicio</Link>
      </div>
    </div>
  );
};

export default ResetSucces;
