import { Spinner } from "react-bootstrap";

export const LoaderComponent = () => {
  return (
    <div className="container-loader-component">
      <Spinner animation="grow" size="sm" variant="primary" />
      <span>Cargando...</span>
    </div>
  );
};

// componentes para pantallas de carga a nivel app

export const LoaderPage = () => {
  return (
    <div className="container-loader-page">
      <Spinner animation="grow" variant="primary" className="spiner-page" />
      <span>Suministros</span>
    </div>
  );
};
