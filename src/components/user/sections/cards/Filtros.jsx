import { Form } from "react-bootstrap";

// Categorias

export const Categorias = ({
  subCategorias,
  handleCategoriaChange,
  categoriaSeleccionada,
}) => {
  return (
    <>
      {subCategorias &&
        subCategorias.map((categoria) => (
          <ul key={categoria}>
            <li>
              <input
                className="m-2 check"
                type="checkbox"
                id={categoria}
                value={categoria}
                checked={categoriaSeleccionada.includes(categoria)}
                onChange={(e) => handleCategoriaChange(e.target.value)}
              />
              <label htmlFor={categoria}>{categoria}</label>
            </li>
          </ul>
        ))}
    </>
  );
};

export const Marcas = ({
  marcasUnicas,
  marcaSeleccionada,
  handleMarcaChange,
}) => {
  return (
    <>
      {marcasUnicas &&
        marcasUnicas.map((marca) => (
          <ul key={marca}>
            <li>
              <input
                className="m-2 check"
                type="checkbox"
                id={marca}
                value={marca}
                checked={marcaSeleccionada === marca}
                onChange={(e) => handleMarcaChange(e.target.value)}
              />
              <label htmlFor={marca}>{marca}</label>
            </li>
          </ul>
        ))}
    </>
  );
};

export const Precio = ({ precioSeleccionado, handlePrecioChange }) => {
  return (
    <>
      <p>Ordenar por:</p>
      <div>
        <Form.Select
          aria-label="Default select example"
          value={precioSeleccionado}
          onChange={handlePrecioChange}
          className="select">
          <option value="">Seleccione</option>
          <option value="menor-mayor">De menor precio a mayor precio</option>
          <option value="mayor-menor">De mayor precio a menor precio</option>
        </Form.Select>
      </div>
    </>
  );
};

export const Descuento = () => {
  return <></>;
};
