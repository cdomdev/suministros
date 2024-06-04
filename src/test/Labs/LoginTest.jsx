import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const LoginTest = () => {
  const emailRefLogin = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email1 = emailRefLogin.current?.value;
    const password = event.target.elements.password.value;

  };

  return (
    <div className="container" style={{ width: "600px", paddingTop: "3em" }}>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Bienvenido a suministros</h1>
        <Form.Group className="form-login" controlId="formGroupEmail">
          <Form.Control
            className="login-custome"
            type="email"
            name="email"
            ref={emailRefLogin}
            placeholder="axample@example.com"
            data-testid="formGroupEmail"
          />
          <Form.Label>Correo electrico</Form.Label>
        </Form.Group>
        <Form.Group className="form-login mt-1" controlId="formGroupPassword">
          <Form.Control
            className="login-custome"
            type="password"
            name="password"
            placeholder="***********"
            data-testid="formGroupPassword"
          />
          <Form.Label>Contraseña</Form.Label>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-3 mb-3 btn-submit"
          data-testid="submitButton">
          Iniciar sesion
        </Button>
      </Form>
    </div>
  );
};

export default LoginTest;
