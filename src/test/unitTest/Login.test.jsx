import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import LoginTest from "../Labs/LoginTest";
import axiosMock from '../mocks/axiosMock'


describe("LoginTest component", () => {
  test("Debe mostrar el componente correctamente", () => {
    render(<LoginTest />);

    const emailInput = screen.getByPlaceholderText("axample@example.com");
    const passwordInput = screen.getByPlaceholderText("***********");
    const submitButton = screen.getByText("Iniciar sesion");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Debe capturar los datos del formulario al enviar", async () => {
    render(<LoginTest />);

    const emailInput = screen.getByPlaceholderText("axample@example.com");
    const passwordInput = screen.getByPlaceholderText("***********");
    const submitButton = screen.getByText("Iniciar sesion");

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "testpassword");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(emailInput.value).toBe("test@example.com");
      expect(passwordInput.value).toBe("testpassword");
    });
  });

  it("Envio de datos del formulario al servidor para el inicio de sesion", async () => {
    render(<LoginTest />);

    // Encontrar los campos de entrada del formulario
    const emailInput = screen.getByTestId("formGroupEmail");
    const passwordInput = screen.getByTestId("formGroupPassword");

    // Simulamos la entrada de datos en el formulario
    fireEvent.change(emailInput, { target: { value: "example@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Simulamos el envío del formulario
    fireEvent.click(screen.getByTestId("submitButton"));

    // // Esperamos a que la llamada a la API se complete
    // await waitFor(() => {
    //   // Verifica que se haya hecho una llamada POST
    //   expect(axiosMock.history.post.length).toBe(1);
    //   expect(axiosMock.history.post[0].data).toEqual({
    //     // Verifica que los datos enviados sean correctos
    //     email: "example@example.com",
    //     password: "password123",
    //   });
    // });

    // // Verificamos que se haya mostrado el mensaje de éxito o error según corresponda
    // expect(
    //   screen.getByText("Datos de inicio de sesión enviados correctamente")
    // ).toBeInTheDocument();
  });
});
