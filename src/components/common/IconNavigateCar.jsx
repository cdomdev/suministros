import { useState, useEffect } from "react";
import { useCarShop } from "../../hook";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "../../assets/icons/reactIcons";

// componente reutilizado para la navegcion al carrito
export const IconNavigateCar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const { cartItems } = useCarShop();

  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  return (
    <div>
      {cartItemCount > 0 && (
        <Link to={"/suministros/carrito-de-compras"}>
          <div className="icon-container">
            <div className="insignia">{cartItemCount}</div>
            <TiShoppingCart className="icon-car" />
          </div>
        </Link>
      )}
    </div>
  );
};
