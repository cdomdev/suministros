import {
  getDataStorage,
  NotificationToast,
  LoaderComponent,
} from "../../../../../utils";
import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { BiArrowBack } from "../../../../../assets/icons/reactIcons";
import { useNotification } from "../../../../../hook";
import { Link } from "react-router-dom";
import { API_HOST } from "../../../../../config/config";
import axios from "axios";

const DataUserUpdate = () => {
  const [dataSesion, setDataSesion] = useState({});
  const [newDatas, setNewDatas] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  useEffect(() => {
    setDataSesion(getDataStorage("userOnValidateScesOnline"));
    setIsLoading(false);
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewDatas((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateData = async () => {
    if (!newDatas || newDatas.length === 0) {
      setBgToast("danger");
      setShowToast(true);
      setToastMessage("No hay datos por modificar");
      return;
    }
    // Solcitud para actulizar datos
    try {
      setIsLoading(true);
      const emailSend = dataSesion.email;
      const response = await axios.post(
        `${API_HOST}/user/profile/update`,
        {
          email: emailSend,
          dataUpdate: newDatas,
        }
      );
      const { name, email, picture, telefono, direccion } = response.data;
      const dataUserSesion = {
        name: name,
        telefono: telefono,
        direccion: direccion,
        email: email,
        picture: picture || null,
      };

      localStorage.setItem(
        "userOnValidateScesOnline",
        JSON.stringify(dataUserSesion)
      );
      if (response.status === 200) {
        setShowToast(true);
        setBgToast("success");
        setToastMessage("Se actualizaron los datos con exito");
        sessionStorage.setItem("changeData", true);
      }
    } catch (e) {
      console.log("Error al actulziar datos", e);
      setShowToast(true);
      setBgToast("danger");
      setToastMessage(
        "Hubo un error al actulizar los datos, intentalo de nuevo"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="body-profile">
      <h1>Actualizar informacion</h1>
      <NotificationToast text={"Actulizacion de datos "} />
      <Link to={"/suministros/user/"}>
        <BiArrowBack className="icon" /> Atras
      </Link>
      <div className="data-info">
        {dataSesion !== null ? (
          <Form>
            <Form.Group className="mb-3" controlId="formGrouName">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={dataSesion.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="number"
                name="telefono"
                defaultValue={dataSesion.telefono}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                type="text"
                name="direccion"
                defaultValue={dataSesion.direccion}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        ) : (
          <LoaderComponent />
        )}
        <Button onClick={handleUpdateData}>
          {isLoading ? (
            <Spinner animation="border" role="status" size="sm" />
          ) : (
            "Actulizar"
          )}
        </Button>
      </div>
    </div>
  );
};

export default DataUserUpdate;
