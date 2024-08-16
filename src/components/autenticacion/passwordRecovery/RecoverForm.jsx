import { useState } from "react";
import { BtnWhatsapp, NotificationToast } from "../../../common";
import { Formik, Field, ErrorMessage } from "formik";
import { API_HOST } from "../../../config/config";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNotification } from "../../../hook";
import SuccessRequest from "./SuccessRequest";
import axios from "axios";

const RecoverForm = () => {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_HOST}/user/validate-email`,
        values
      );
      if (response && response.status === 200) {
        setUser(true);
        setData(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setBgToast("danger");
        setShowToast(true);
        setUser(false);
        setIsLoading(false);
        setToastMessage(
          "El correo ingresado no existe, valide e intente nuevamente"
        );
      } else {
        setBgToast("danger");
        setShowToast(true);

        setUser(false);
        setIsLoading(false);
        setToastMessage("Algo salio mal, por favor intentalo de nuevo");
        console.log(error);
      }
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };
  return (
    <div className="container-recovery">
      <div className="form-recover-password">
        {user ? (
          <>
            <SuccessRequest data={data} />
          </>
        ) : (
          <>
            <NotificationToast text={"Restablecer contraseña"} />
            <h1>Solicitud para restablecer contraseña</h1>
            <p>
              Por motivos de seguridad, tu clave olvidada debe ser reemplazada
              por una nueva. <br /> Ingresa el mail que registraste en
              suministros
            </p>
            <Formik
              initialValues={{
                email: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "El correo es requerido";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                  errors.email = "Ingrese un correo electrónico válido";
                }
                return errors;
              }}
              onSubmit={handleSubmit}>
              {(formik) => (
                <Form className="form-recovery" onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3 form-login">
                    <Form.Label className="mt-2">
                      Ingrese su correo electrónico
                    </Form.Label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email@example.com"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
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
          </>
        )}
      </div>
      <BtnWhatsapp />
    </div>
  );
};

export default RecoverForm;
