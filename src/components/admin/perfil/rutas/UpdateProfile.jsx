import { Form } from "react-bootstrap";
import { getDataStorage } from "../../../../utils";
import { NotificationToast, LoaderComponent } from "../../../common";
import { Link } from "react-router-dom";
import { BiArrowBack } from "../../../../assets/icons/reactIcons";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { API_HOST } from "../../../../config/config";
import { api } from "../../../../config/axios.conf";
import { useNotification } from "../../../../hook";

export const UpdateProfile = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newDatas, setNewDatas] = useState({});

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

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
      const emailSend = data.email;
      const response = await api.post(`${API_HOST}/user/profile/update`, {
        email: emailSend,
        dataUpdate: newDatas,
      });
      const { id, name, email, picture, telefono, direccion } = response.data;
      const dataUserSesion = {
        id: id,
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
      if (e.response.status === 403 || e.response.status === 401) {
        setShowToast(true);
        setBgToast("danger");
        setToastMessage(
          "No tienes permisos para esta operacion, algo salio mal con tu sesion, iniciala nuevamente"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setData(getDataStorage("userOnValidateScesOnline"));
  }, []);
  return (
    <>
      <div className="body-profile">
        <h1>Actualizar informacion</h1>
        <NotificationToast text={"Actulizacion de datos "} />
        <Link to={"/admin/profile/"}>
          <BiArrowBack className="icon" /> Atras
        </Link>
        <div className="data-info">
          {data !== null ? (
            <Form>
              <Form.Group className="mb-3" controlId="formGrouName">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue={data.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="number"
                  name="telefono"
                  defaultValue={data.telefono}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAddress">
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  type="text"
                  name="direccion"
                  defaultValue={data.direccion}
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
    </>
  );
};
