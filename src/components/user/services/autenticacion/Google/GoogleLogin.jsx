import React, { useEffect } from "react";
import EventEmitter from "../../../../../hook/EventEmitter";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { IconGoogle } from "../../../../../assets/icons/reactIcons";
import { useUser, useNotification } from "../../../../../hook";
import { NotificationToast } from "../../../../../utils";
import { API_HOST } from "../../../../../config/config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

// componente en uso

const GoogleLogin = ({ setIsLoggedIn, texto }) => {
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

  const notifyAuthChange = (isLoggedIn) => {
    EventEmitter.emit("authChange", isLoggedIn);
  };
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <LoginButton
        texto={texto}
        notifyAuthChange={notifyAuthChange}
        setIsLoggedIn={setIsLoggedIn}
      />
    </GoogleOAuthProvider>
  );
};

const LoginButton = ({ notifyAuthChange, texto }) => {
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const navigate = useNavigate();
  const { login } = useUser();

  const loginInit = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Envía el token de acceso al servidor para validar
        const serverResponse = await axios.post(
          `${API_HOST}/user/oauth-google`,
          {
            token: response.access_token,
          }
        );
        const {
          id,
          role,
          name,
          email,
          picture,
          telefono,
          direccion,
          accessToken,
        } = serverResponse.data;
        const dataUserSesion = {
          role: role,
          id: id,
          name: name,
          email: email,
          picture: picture,
          direccion: direccion,
          telefono: telefono,
          accessToken: accessToken,
        };

        localStorage.setItem(
          "userOnValidateScesOnline",
          JSON.stringify(dataUserSesion)
        );
        if (serverResponse.status === 200) {
          const { role } = serverResponse.data;
          login(role);
          notifyAuthChange(true);
          if (role === "admin") {
            localStorage.setItem("HttpOnlyAdmin", accessToken);
            navigate("/admin");
          }
        } else {
          setToastMessage("Hubo problemas con el inicio de sesion");
          setBgToast("danger");
          setShowToast(true);
        }
      } catch (error) {
        console.error("Error al enviar el token al servidor:", error);
        setToastMessage("Hubo problemas con el inicio de sesion");
        setBgToast("danger");
        setShowToast(true);
      }
    },
    onError: (errorResponse) => {
      setBgToast("danger");
      setShowToast(true);
      console.error("Error durante el inicio de sesión:", errorResponse);
      setToastMessage("Hubo problemas dutante el inicio de sesion");
    },
  });

  return (
    <>
      <NotificationToast text={"Inicio de sesion"} />
      <div className="btn-custome-goolgle" onClick={loginInit}>
        <div className="icon-google">
          <IconGoogle />
        </div>
        <div>{texto}</div>
      </div>
    </>
  );
};

export default GoogleLogin;
