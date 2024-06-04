import React, { useEffect, useState } from "react";
import {
  RiAddFill,
  TiMinus,
  IoCartOutline,
} from "../../assets/icons/reactIcons";
import { Form, Button } from "react-bootstrap";
import { useCarShop, useNotification } from "../../hook";
import {
  IconNavigateCar,
  NotificationToast,
  getDataStorage,
} from "../../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BtnWhatsapp } from "../../utils/ComponentsUtils";
import { formateValue } from "../../utils/funtionsProducts";

const DetallesProducto = () => {
  const [producto, setProducto] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const { addToCart } = useCarShop();

  useEffect(() => {
    setProducto(getDataStorage("selectedProduct"));
  }, []);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...producto, cantidad: quantity });
    setBgToast("success");
    setShowToast(true);
    setToastMessage("Producto agregado al carrito");
    setQuantity(1);
  };

  // Renderizar los detalles del producto
  return (
    <div>
      {producto === null || producto.length === 0 ? (
        <p className="text-center">Cargando producto...</p>
      ) : (
        <section>
          <NotificationToast text={"Carrito de compras"} />
          <div className="container-details">
            <div className="detail-img">
              <LazyLoadImage effect="blur" src={producto.image} alt="img" />
              <div>
                <span className="txt">
                  las fotografías de productos y ambientes son ilustrativas, los
                  colores y texturas pueden variar según el dispositivo donde se
                  visualicen y pueden diferir de la realidad. Los elementos
                  ambientados no se incluyen en la compra.
                </span>
              </div>
            </div>
            <div className="details">
              <div className="ref">
                <strong>{producto.title}</strong>
                <span className="r"> REF: {producto.referencia}</span>
              </div>
              <strong>{producto.nombre}</strong>
              <div className="valor">
                <strong>Precio:</strong>
                <span>
                  $ {parseInt(producto.valor, 10).toLocaleString("es-CO")}
                </span>
              </div>
              <div className="text">
                <p>{producto.description}</p>
              </div>

              <div className="contendor-quantity">
                <div className="quantity">
                  <button className="decrement" onClick={handleDecrement}>
                    <TiMinus />
                  </button>
                  <Form.Control
                    type="number"
                    min="1"
                    max="100"
                    step="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                  <button className="increment" onClick={handleIncrement}>
                    <RiAddFill />
                  </button>
                </div>
                <Button variant="primary" onClick={handleAddToCart}>
                  Añadir al carrito
                </Button>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <>
              <h3 className="text-center mt-3">Productos relacionados</h3>
              <div className="sideProducts-relacionados">
                <CarProductsRelationados />
              </div>
            </>
          </div>
        </section>
      )}

      <IconNavigateCar />
      <BtnWhatsapp />
    </div>
  );
};

const CarProductsRelationados = () => {
  const [relacionado, setRelacionado] = useState([]);
  const { addToCart } = useCarShop();

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  useEffect(() => {
    setRelacionado(getDataStorage("categroyselectedProduct"));
  }, []);

  const handleAgregarAlCarrito = (producto) => {
    addToCart({ ...producto, cantidad: 1 });
    setBgToast("success");
    setShowToast(true);
    setToastMessage("Producto agregado al carrito");
  };

  return (
    <>
      <div className="contenedor-card">
        {relacionado.map((producto) => (
          <ul key={producto.id} className="card-products">
            <span className="text-ref">REF: {producto.referencia}</span>
            <LazyLoadImage
              effect="blur"
              src={producto.image}
              alt="not found"
              className="img-products"
            />
            <div className="contenido-card">
              <li className="title">{producto.title}</li>
              <li className="text">{producto.nombre}</li>
              <li className="valor">
                $ {formateValue(parseInt(producto.valor, 10))}{" "}
                <span className="unidad"></span>
              </li>
            </div>
            <div className="icons">
              <IoCartOutline
                className="icon"
                onClick={() => handleAgregarAlCarrito(producto)}
              />
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};

export default DetallesProducto;
