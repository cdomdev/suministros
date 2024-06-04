// obetener datos del localStorage
export const getDataStorage = (key) => {
    const dataLocal = localStorage.getItem(key);
    if (dataLocal) {
      return JSON.parse(dataLocal);
    }
    return null; // Devuelve null si no hay datos para la clave especificada
  };
  
  // obetener datos del sessionStorage
  export const getDataSesionStorega = (key) => {
    const dataLocal = sessionStorage.getItem(key);
    if (dataLocal) {
      return JSON.parse(dataLocal);
    }
    return null; // Devuelve null si no hay datos para la clave especificada
  };