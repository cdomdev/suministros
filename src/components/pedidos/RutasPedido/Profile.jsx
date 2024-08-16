import { useEffect, useState } from "react";
import { Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegEdit } from "../../../../../assets/icons/reactIcons";
import { getDataStorage } from "../../../../../utils";
import { LoaderComponent } from "../../../../../common";

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getDataStorage("userOnValidateScesOnline"));
  }, []);

  return (
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
              <Link to={"data"}>
                {" "}
                <FaRegEdit className="icon" /> Editar perfil
              </Link>
            </Col>
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};

export default Profile;
