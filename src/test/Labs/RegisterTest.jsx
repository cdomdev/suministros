import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";

const RegisterTest = () => {
  const handleSubmit = async (values) => {
    try {
      if (values) {
        console.log("Datos del formulario", values);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
          <div
            className="container"
            style={{ width: "600px", paddingTop: "2em" }}>
            <Form className="form-register" onSubmit={handleSubmit}>
              <h1 className="text-form text-center">Formulario de registro</h1>
              <Form.Group className="mb-1" controlId="formBasicName">
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
                <Form.Label>Ingrese su nombre</Form.Label>
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
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
                <Form.Label>Ingrese su correo electrónico</Form.Label>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
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
                <Form.Label>Ingrese una contraseña</Form.Label>
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
                Regístrarme
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterTest;
