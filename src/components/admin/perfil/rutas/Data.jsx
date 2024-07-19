import { useEffect, useState } from "react";
import { getDataStorage } from "../../../../utils";
import { Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoaderComponent } from "../../../../utils";
import { FaRegEdit } from "../../../../assets/icons/reactIcons";

export const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getDataStorage("userOnValidateScesOnline"));
  }, []);

  return (
    <>
      <div className="body-profile">
        <h1>Perfil</h1>
        {data !== null ? (
          <div className="data-user">
            <div className="row info-user">
              <Col xs={6} className="d-flex flex-column">
                <Form.Label>Nombres</Form.Label>
                <span>{data.name || "nombre"}</span>
              </Col>
              <Col xs={6} className="d-flex flex-column">
                <Form.Label>Correo</Form.Label>
                <span>{data.email}</span>
              </Col>
            </div>
            <div className="row info-user">
              <Col xs={6} className="d-flex flex-column">
                <Form.Label>Direcccion</Form.Label>
                <span>
                  {data.direccion || "Aun no tienes una direccion registrada"}
                </span>
              </Col>
              <Col xs={6} className="d-flex flex-column">
                <Form.Label>Telefono</Form.Label>
                <span>
                  {data.telefono || "Aun no tienes un telefono registrado"}
                </span>
              </Col>
            </div>
            <div className="row info-user">
              <Col xs={6} className="mt-4">
                {/* {tener presenta para actulziar perfil de usuario} */}
                {/* <Link to={"profile-update"}>
                  {" "}
                  <FaRegEdit className="icon" /> Editar perfil
                </Link> */}
              </Col>
            </div>
          </div>
        ) : (
          <LoaderComponent />
        )}
      </div>
    </>
  );
};
