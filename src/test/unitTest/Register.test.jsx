import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import RegisterTest from "../Labs/RegisterTest";

describe("RegisterPrueba component", () => {
  test("Debe mostrar el compenente con todo los campos de entrada", () => {
    render(<RegisterTest />);

    const nameInput = screen.getByTestId("formBasicName");
    const emailInput = screen.getByTestId("formBasicEmail");
    const passwordInput = screen.getByTestId("formBasicPassword");

    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  test("Debe mostrar un mensje de error al enviar campos vacios", async () => {
    render(<RegisterTest />);

    // Simula el envío del formulario con campos vacíos
    const submitButton = screen.getByText("Regístrarme");
    userEvent.click(submitButton);

    // Verifica que se muestren los mensajes de error para cada campo
    await waitFor(() => {
      expect(
        screen.getByText("Este campo no puede quedar vacío")
      ).toBeDefined();
      expect(screen.getByText("Se requiere el correo")).toBeDefined();
      expect(screen.getByText("Es necesaria una contraseña")).toBeDefined();
    });
  });

  test("Debe validar que los campos de entrado son los esperados", async () => {
    render(<RegisterTest />);

    // Extrae los datos del formulario y verifica que los campos de entrada son los esperados
    expect(screen.getByTestId("formBasicName")).toHaveAttribute("type", "text");
    expect(screen.getByTestId("formBasicEmail")).toHaveAttribute(
      "type",
      "email"
    );
    expect(screen.getByTestId("formBasicPassword")).toHaveAttribute(
      "type",
      "password"
    );
  });
});
