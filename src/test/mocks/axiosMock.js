import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { API_HOST } from "../../config/config";

const mock = new MockAdapter(axios);

const mockData = [
  {
    id: 88,
    title: "CORONA",
    nombre: "Pegacor Corona Flex Exteriores Gris 25 kg",
    valor: "140000.00",
    description:
      "Pegacor de mayor flexibilidad, alta resistencia a los cambios térmicos, alta calidad y duración.",
    image:
      "http://localhost:3000/src/modules/uploads/products/1706480092263-38060393.webp",
    referencia: "901191501",
    Categorium: { id: 52, nombre: "Pegantes" },
    cantidad: 1,
  },
];

// Credenciales de inicio de sesión
const mockCredentials = {
  email: "usuario@example.com",
  password: "contraseña123",
};

// Token de autenticación
const authToken = "token-de-autenticacion";

mock.onPost(`${API_HOST}/api/login`).reply((config) => {
  // Parsea los datos enviados en la solicitud
  const { email, password } = JSON.parse(config.data);

  // Verifica si las credenciales son válidas
  if (
    email === mockCredentials.email &&
    password === mockCredentials.password
  ) {
    // Devuelve un token de autenticación si las credenciales son válidas
    return [200, { token: authToken }];
  } else {
    // Devuelve un error 401 si las credenciales no son válidas
    return [401, { error: "Credenciales inválidas" }];
  }
});

mock.onGet(`${API_HOST}/categoria-padre/construccionyremodelacion`).reply(200, {
  productos: mockData,
});

export default mock;
