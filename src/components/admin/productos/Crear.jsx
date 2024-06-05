import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { FormAdd } from "./FormAdd";
import { useNotification } from "../../../hook/AppContextProvider";
import { API_HOST } from "../../../config/config";

export const Crear = ({ setListadoState }) => {
  const [fileName, setFileName] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);

  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedSubCategoria, setSelectedSubCategoria] = useState("");

  const [productState, setProductState] = useState({
    title: "",
    nombre: "",
    description: "",
    valor: "",
    displayImages: "",
    cantidad: "",
    referencia: "",
    imagesToSend: "",
  });
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  useEffect(() => {
    // Peticion de la categoria
    const fetchData = async () => {
      await axios
        .get(`${API_HOST}/api/obtener/categorias`)
        .then((response) => {
          if (response.status === 200) {
            setCategorias(response.data.categorias);
          }
        })
        .catch((e) => {
          console.log(`Error al obtener las categorias ${e}`);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_HOST}/api/obtener/sub-categorias`)
        .then((response) => {
          if (response.status === 200) {
            setSubcategorias(response.data.categorias);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
  }, [categorias]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile ? selectedFile.name : "");

    setProductState({
      ...productState,
      displayImages: URL.createObjectURL(selectedFile),
      imagesToSend: selectedFile,
    });
  };

  const handleCategoriaChange = (event) => {
    setSelectedCategoria(event.target.value);
  };

  const handleSubcategoriaChange = (event) => {
    setSelectedSubCategoria(event.target.value);
  };


  const getFormValues = async (e) => {
    e.preventDefault();

    const {
      title,
      description,
      nombre,
      valor,
      cantidad,
      referencia,
      imagesToSend,
    } = productState;

    // formateo a valor real
    const precio = parseInt(valor).toFixed(2);

    if (
      !title ||
      !description ||
      !precio ||
      !cantidad ||
      !referencia ||
      !nombre ||
      imagesToSend.length === 0
    ) {
      setBgToast("danger");
      setShowToast(true);
      setToastMessage("Faltan datos para crear el producto");
      return;
    }

    const formData = new FormData();
    formData.append("files", imagesToSend);

    try {
      const response = await axios.post(`${API_HOST}/api/upload`, formData);

      if (response.status === 200 || response.status === 201) {
        const { uploadedFiles } = response.data;
        const imageUrls = uploadedFiles.map((file) => file.imageUrl);

        // Obtener el nombre de la categoría seleccionada
        const selectedCategory = categorias.find(
          (cat) => cat.id === Number(selectedCategoria)
        );
        const selectedCategoryName = selectedCategory
          ? selectedCategory.nombre
          : "";

        // Obtener el nombre de la subcategoría seleccionada
        const selectedSubCategory = subcategorias.find(
          (sub) => sub.id === Number(selectedSubCategoria)
        );
        const selectedSubCategoryName = selectedSubCategory
          ? selectedSubCategory.nombre
          : "";

        const newProduct = {
          id: uuidv4(),
          title: title.toUpperCase(),
          nombre: nombre,
          description: description,
          valor: precio,
          cantidad: cantidad,
          referencia: referencia,
          image: imageUrls[0],
          categoria_id:  selectedCategoria,
          subcategoria_id: selectedSubCategoria,
          categoria: selectedCategoryName,
          subCategoria: selectedSubCategoryName,
        };

        setListadoState((prevListado) => {
          const newListado = prevListado
            ? [...prevListado, newProduct]
            : [newProduct];
          localStorage.setItem("productos", JSON.stringify(newListado));
          return newListado;
        });


        setProductState({
          title: "",
          description: "",
          nombre: "",
          valor: "",
          cantidad: "",
          referencia: "",
          image: "",
        });

        setBgToast("success");
        setShowToast(true);
        setToastMessage("Se agrego un nuevo producto");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.error
      ) {
        setMessage(error.response.data.error);
      } else {
        setBgToast("danger");
        setShowToast(true);
        setToastMessage("No se pudo agregar el producto, intentalo de nuevo ");
      }
      console.log(`Hubo un error en la solicitud ${error}`);
    }
  };

  return (
    <FormAdd
      categorias={categorias}
      subcategorias={subcategorias}
      getFormValues={getFormValues}
      productState={productState}
      setProductState={setProductState}
      fileName={fileName}
      handleFileChange={handleFileChange}
      handleCategoriaChange={handleCategoriaChange}
      handleSubcategoriaChange={handleSubcategoriaChange}
      selectedCategoria={selectedCategoria}
      selectedSubCategoria={selectedSubCategoria}
    />
  );
};
