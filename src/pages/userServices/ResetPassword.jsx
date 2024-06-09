import React, { useState } from "react";
import { CiCircleChevRight } from "../../assets/icons/reactIcons";
import { Form, Button, Spinner } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { useParams } from "react-router";
import { NotificationToast } from "../../utils";
import { useNotification } from "../../hook";
import axios from "axios";
import { API_HOST } from "../../config/config";
import ResetSucces from "../../components/user/services/autenticacion/passwordRecovery/ResetSucces";
import { BtnWhatsapp } from "../../utils/ComponentsUtils";

const ResetPassword = () => {
  const { setShowToast, setToastMessage, setBgToast } = useNotification();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    try {
      const URL = `${API_HOST}/reset-password`;

      const response = await axios.post(URL, { token, values });
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      if (error.response.status === 400) {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("Algo salio mal, por favor intentalo de nuevo");
      }
      console.log(error);
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      {success ? (
        <ResetSucces />
      ) : (
        <div className="container-recovery">
          <NotificationToast text={"Restablecer contraseña"} />
          <h1>Solicitud para restablecer contraseña</h1>
          <h2>
            A continuación encontrará un formulario para restablecer su
            contraseña, por favor siga las indicaciones
          </h2>
          <ul>
            <li>
              <CiCircleChevRight className="check" />
              Ingrese una nueva contraseña
            </li>
            <li>
              <CiCircleChevRight className="check" />
              Confirme la contraseña
            </li>
            <li>
              <CiCircleChevRight className="check" />
              La contraseña debe contener al menos una mayúscula, una minúscula,
              un número y tener un máximo de 8 caracteres
            </li>
          </ul>
          <Formik
            initialValues={{
              password: "",
              password2: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.password) {
                errors.password = "Se requiere una contraseña";
              }
              if (!values.password2) {
                errors.password2 = "Se requiere confirmar la contraseña";
              } else if (values.password !== values.password2) {
                errors.password2 = "Las contraseñas deben coincidir";
              }
              return errors;
            }}
            onSubmit={handleSubmit}>
            {(formik) => (
              <Form className="form-recovery" onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3 form-login">
                  <Form.Label className="mt-2 pass">
                    Ingrese una nueva contraseña
                  </Form.Label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="*********"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-login">
                  <Form.Label className="mt-2">
                    Confirme la contraseña
                  </Form.Label>
                  <Field
                    type="password"
                    name="password2"
                    placeholder="*********"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password2"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-recovery-password"
                  disabled={formik.isSubmitting}>
                  {isLoading ? (
                    <div className="spinner-container">
                      <Spinner animation="border" role="status" size="sm" />
                    </div>
                  ) : (
                    <>Restablecer contraseña</>
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      )}
      <BtnWhatsapp />
    </>
  );
};

export default ResetPassword;
