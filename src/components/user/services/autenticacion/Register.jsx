import { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { Form, Button, Spinner } from "react-bootstrap";
import { useUser, useNotification } from "../../../../hook";
import { GoogleLogin } from "./";
import EventEmitter from "../../../../hook/EventEmitter";
import { NotificationToast } from "../../../../utils";
import { API_HOST } from "../../../../config/config";
import { isAuthenticated } from "../../../../helpers/isAuthenticated";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  const { login } = useUser();
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isLoggedIn]);

  const notifyAuthChange = (isLoggedIn) => {
    EventEmitter.emit("authChange", isLoggedIn);
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const URL = `${API_HOST}/user/registro`;
      const response = await axios.post(URL, values);

      const { name, email, picture } = response.data;
      const dataUserSesion = {
        name: name,
        email: email,
        picture: picture || null,
      };

      localStorage.setItem(
        "userOnValidateScesOnline",
        JSON.stringify(dataUserSesion)
      );

      if (response.status === 201) {
        login(response.data);
        notifyAuthChange(true);
      } else {
        setBgToast("warning");
        setShowToast(true);
        setToastMessage("El correo ya se encuantra registrado");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.error
      ) {
        setBgToast("warning");
        setShowToast(true);
        setToastMessage("El correo ya se encuantra registrado");
      } else {
        console.log(error);
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("Error en el registro, intentalo de nuevo ");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <NotificationToast text={"Registro"} />
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Este campo no puede quedar vacío";
            }
            if (!values.email) {
              errors.email = "Se requiere el correo";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Ingrese una dirección de correo válida";
            }
            if (!values.password) {
              errors.password = "Es necesaria una contraseña";
            } else if (
              !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{1,8}$/.test(values.password)
            ) {
              errors.password =
                "La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener un máximo de 8 caracteres";
            }
            return errors;
          }}
          onSubmit={handleSubmit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
            handleSubmit,
          }) => (
            <Form className="login-form" onSubmit={handleSubmit}>
              <h1 className="text-form">Registro personas</h1>
              <GoogleLogin texto={"Registrate con google"} />
              <div className="contenedor-liner">
                <hr className="liner-separator" />
                <span className="m-1 o">O</span>
                <hr className="liner-separator" />
              </div>
              <Form.Group className="mb-1" controlId="formBasicName">
                <Form.Label>Ingrese su nombre</Form.Label>
                <Form.Control
                  className="login-custome"
                  type="text"
                  placeholder="Example"
                  name="name"
                  data-testid="formBasicName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Ingrese su correo electrónico</Form.Label>
                <Form.Control
                  className="login-custome"
                  type="email"
                  placeholder="example@example.com"
                  name="email"
                  data-testid="formBasicEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  isInvalid={touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingrese una contraseña</Form.Label>
                <Form.Control
                  type="password"
                  className="login-custome "
                  placeholder="**********"
                  data-testid="formBasicPassword"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  isInvalid={touched.password && errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"></Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn-submit mb-4"
                disabled={isSubmitting}>
                {isLoading ? (
                  <div className="spinner-container">
                    <Spinner animation="border" role="status" size="sm" />
                  </div>
                ) : (
                  <>Regístrarme </>
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
