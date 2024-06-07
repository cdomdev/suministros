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
import { BtnWhatsapp, LoaderComponent } from "../../utils/ComponentsUtils";
import { calcalateDiscount, formateValue } from "../../utils/funtionsProducts";

const DetalleProductsOfertas = () => {
  const [producto, setProducto] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [oferta, setOferta] = useState(null);

  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const { addToCart } = useCarShop();

  useEffect(() => {
    setProducto(getDataStorage("selectedProduct"));
    setOferta(getDataStorage("categroyselectedProductOfert"));
  }, []);

  // Aplicar el descuento al producto si producto y oferta no son nulos
  let productoConDescuento = producto;
  if (producto && oferta) {
    const valueWhitDescount = calcalateDiscount(
      producto.valor,
      oferta[0].descuento
    );
    productoConDescuento = {
      ...producto,
      valor: valueWhitDescount,
      descuento: oferta[0].descuento | 0,
    };
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...productoConDescuento, cantidad: quantity });
    setBgToast("success");
    setShowToast(true);
    setToastMessage("Producto agregado al carrito");
    setQuantity(1);
  };

  // Renderizar los detalles del producto
  return (
    <div>
      {producto === null || producto.length === 0 ? (
        <LoaderComponent />
      ) : (
        <section>
          <NotificationToast text={"Carrito de compras"} />
          <div className="container-details">
            <div className="detail-img">
              <LazyLoadImage
                effect="blur"
                src={productoConDescuento.image}
                alt="img"
              />
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
                <span>$ {formateValue(productoConDescuento.valor)}</span>
              </div>
              <div className="text">
                <p>{productoConDescuento.description}</p>
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
        </section>
      )}
      <IconNavigateCar /> v
      <BtnWhatsapp />
    </div>
  );
};

export default DetalleProductsOfertas;
