import React from "react";
import { Button, Form } from "react-bootstrap";
import { Upload } from "../../../assets/icons/reactIcons";

export const FormAdd = ({
  getFormValues,
  productState,
  subcategorias,
  setProductState,
  handleFileChange,
  categorias,
  fileName,
  selectedCategoria,
  selectedSubCategoria,
  handleSubcategoriaChange,
  handleCategoriaChange,
}) => {
  return (
    <div className="add">
      <h2 className="text-titles-admin">Añadir productos </h2>
      <Form onSubmit={getFormValues}>
        <Form.Label>Marca del producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Corona"
          value={productState.title}
          onChange={(e) =>
            setProductState({ ...productState, title: e.target.value })
          }
          minLength={1}
          maxLength={50}
        />
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Concolor"
          value={productState.nombre}
          onChange={(e) =>
            setProductState({ ...productState, nombre: e.target.value })
          }
          minLength={1}
          maxLength={100}
        />
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control
          type="number"
          placeholder="120000"
          value={productState.valor}
          onChange={(e) =>
            setProductState({ ...productState, valor: e.target.value })
          }
          maxLength={30}
          minLength={1}
        />
        <Form.Label>Referencia del producto</Form.Label>
        <Form.Control
          type="text"
          className="mb-3"
          placeholder="90123232"
          value={productState.referencia}
          onChange={(e) => {
            setProductState({ ...productState, referencia: e.target.value });
          }}
          maxLength={20}
          minLength={1}
        />
        <span className="contenedor-refStock">
          <Form.Control
            type="number"
            placeholder="1"
            value={productState.cantidad}
            onChange={(e) => {
              setProductState({ ...productState, cantidad: e.target.value });
            }}
            className=" form-ref"
            maxLength={10}
            minLength={1}
          />

          <label htmlFor="file-upload" className="custom-file-upload form-ref">
            <span className="container-btn-updload">
              <Upload />
              Añadir imagen
            </span>
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
            name="imagen"
          />
        </span>

        <span style={{ color: "#213C65" }}>{fileName}</span>
        {/* categoria */}
        <Form.Label>Relacionar a una categoría</Form.Label>
        <Form.Select
          onChange={handleCategoriaChange}
          value={selectedCategoria ? selectedCategoria.id : ""}>
          <option>Seleccionar categoria</option>
          {categorias &&
            categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
        </Form.Select>

        {/* subcategoria */}
        <Form.Label>Añadir a una subcategoría</Form.Label>
        <Form.Select
          onChange={handleSubcategoriaChange}
          value={selectedSubCategoria}>
          <option>Relacionar a Subcategoria</option>
          {subcategorias &&
            subcategorias.map((subcategoria) => (
              <option key={subcategoria.id} value={subcategoria.id}>
                {subcategoria.nombre}
              </option>
            ))}
        </Form.Select>
        {/* descripcion */}
        <Form.Label>Agregar descripcion de producto</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Descripcion... "
          value={productState.description}
          onChange={(e) =>
            setProductState({ ...productState, description: e.target.value })
          }
        />
        <span className="container-btn-add">
          <Button
            className="btn btn-custom mt-2"
            variant="primary"
            type="submit">
            Añadir
          </Button>
        </span>
      </Form>
    </div>
  );
};
