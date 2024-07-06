import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import imgFav from "../../../../assets/images/favicon.webp";
import EventEmitter from "../../../../hook/EventEmitter";
import { useUser, useNotification } from "../../../../hook";
import { NotificationToast } from "../../../../utils";
import { API_HOST } from "../../../../config/config";
import { GoogleLogin } from "./";
import axios from "axios";

const Login = ({ handleCloseModal, handleLoginSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRefLogin = useRef();
  const navigate = useNavigate();

  const { login, setIsLoggedIn } = useUser();
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  useEffect(() => {
    const authChangeCallback = (isLoggedIn) => {
      if (isLoggedIn) {
      }
    };
    const unsubscribe = EventEmitter.subscribe(
      "authChange",
      authChangeCallback
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const recoveryRoute = () => {
    handleCloseModal();
  };

  const notifyAuthChange = (isLoggedIn) => {
    EventEmitter.emit("authChange", isLoggedIn);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email1 = emailRefLogin.current?.value;
    const password = event.target.password.value;

    setIsLoading(true);
    if (email1 && password) {
      try {
        const URL = `${API_HOST}/user/login`;
        const response = await axios.post(URL, { email1, password });
        const { accessToken } = response.data;

        const { id, name, email, picture, telefono, direccion } = response.data;
        const dataUserSesion = {
          name: name,
          id: id,
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
          const userData = response.data;
          login(userData);
          notifyAuthChange(true);
          handleLoginSuccess(true);
          if (userData.role === "admin") {
            localStorage.setItem("HttpOnlyAdmin", accessToken);
            navigate("/admin");
          } else {
            const previousLocation =
              sessionStorage.getItem("previousLocation") || "/";
            navigate(previousLocation);
          }
        } else {
          setToastMessage("Usuario o contraseña incorrectos");
          setBgToast("danger");
          setShowToast(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setBgToast("danger");
          setToastMessage("Usuario o contraseña incorrectos");
          setShowToast(true);
        } else {
          console.log("Error inesperado", error);
          setBgToast("danger");
          setToastMessage(
            "Hubo un problema con el inicio de sesion, intentalo de nuevo"
          );
          setShowToast(true);
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setBgToast("danger");
      setShowToast(true);
      setToastMessage("Por favor ingresa los datos para el inicio de sesion");
      setIsLoading(false);
    }
  };

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <NotificationToast text={"Inicio de sesion"} />
      <img loading="lazy" src={imgFav} className="fav-login" alt="Favicon" />
      <h1>Bienvenido a suministros</h1>
      <GoogleLogin
        handleCloseModal={handleCloseModal}
        setIsLoggedIn={setIsLoggedIn}
        handleLoginSuccess={handleLoginSuccess}
        texto={"Inicar sesion con google"}
      />
      <div className="contenedor-liner">
        <hr className="liner-separator" />
        <span className="m-1 o">O</span>
        <hr className="liner-separator" />
      </div>
      <Form.Group className="form-login" controlId="formGroupEmail">
        <Form.Label>Correo electrico</Form.Label>
        <Form.Control
          className="login-custome"
          type="email"
          name="email"
          data-testid="formGroupEmail"
          ref={emailRefLogin}
          placeholder="axample@example.com"
        />
      </Form.Group>
      <Form.Group className="form-login mt-1" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          className="login-custome"
          type="password"
          name="password"
          data-testid="formBasicPassword"
          placeholder="***********"
        />
        <Link
          className="btn-recovery"
          onClick={recoveryRoute}
          to={"/suministros/recover-password"}>
          ¿Olvidaste tu contraseña?
        </Link>
      </Form.Group>

      {/* ruta para restablcer contraseña */}

      <Button variant="primary" type="submit" className="mt-3 mb-3 btn-submit">
        {isLoading ? (
          <div className="spinner-container">
            <Spinner animation="border" role="status" size="sm" />
          </div>
        ) : (
          <>Iniciar sesión</>
        )}
      </Button>
    </Form>
  );
};

export default Login;
