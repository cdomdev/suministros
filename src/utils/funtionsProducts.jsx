// funiciones para obtenr marcas - categorias unicasa de cada producto

// Funcion para obtenrlas marcas unicas de un array de productos
export const obtenerMarcasUnicas = (productos) => {
  const marcasUnicas = [
    ...new Set(productos.map((producto) => producto.marca)),
  ];
  return marcasUnicas;
};

// Funcion para obtener subcategorias
export const obtenerSubCategorias = (productos) => {
  const subcategorias = [
    ...new Set(productos.map((producto) => producto.subcategoria.nombre)),
  ];
  return subcategorias;
};

export const calcularEnvio = (destino, precio) => {
  const free = parseFloat(400000, 10);
  const destinoInt = parseInt(destino, 10);
  if (precio >= free) {
    return 0;
  } else {
    return destinoInt === 1 ? 15000 : 25000;
  }
};

export const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.cantidad * item.valor,
    0
  );
};

export function calcalateDiscount(value, discount) {
  const discountOfert = parseInt(value * discount, 10) / 100;
  const valueFinish = discountOfert - value;
  return Math.abs(valueFinish);
}

export function formateValue(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Navegacion a la pagina de detalles del producto
export function navigateDetailOfertas(producto, ofertas) {
  localStorage.setItem("selectedProduct", JSON.stringify(producto));
  localStorage.setItem("categroyselectedProductOfert", JSON.stringify(ofertas));
  sessionStorage.setItem("valuForValideThisOfertDET", true);
}
