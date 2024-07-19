import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarShop } from "../../../../../hook";
import { PiShoppingCartSimpleThin } from "../../../../../assets/icons/reactIcons";

// icono con navegacion al carrito

export const IconCar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  localStorage.setItem("count", cartItemCount);
  const targetRef = useRef(null);
  const { cartItems } = useCarShop();
  const navigate = useNavigate();

  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  const navigateCar = () => {
    navigate("/suministros/carrito-de-compras");
  };

  return (
    <>
      <div ref={targetRef} className="contenedor-car">
        <PiShoppingCartSimpleThin
          onClick={navigateCar}
          className="carshop icon"
        />
        <span className="carrito">CARRITO</span>
        {cartItemCount > 0 && (
          <div className="insignia-car">{cartItemCount}</div>
        )}
      </div>
    </>
  );
};
