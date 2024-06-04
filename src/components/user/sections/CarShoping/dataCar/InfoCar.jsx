import React, { useState, useEffect } from "react";
import { UserNotLoggin } from "./UserNotLoggin";
import { TiShoppingCart } from "../../../../../assets/icons/reactIcons";
import { useNavigate } from "react-router";
import { useCarShop } from "../../../../../hook";
import { isAuthenticated } from "../../../../../helpers/isAuthenticated";
import { AddToCar } from "./AddToCar";
import { DeleteOneProductCar } from "./DeleteOneProductCar";
import { formateValue } from "../../../../../utils/funtionsProducts";

export const InfoCar = () => {
  const { cartItems } = useCarShop();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isLoggedIn]);

  const subTotal = (item) => {
    const total = item.cantidad * item.valor;
    return total;
  };

  console.log(cartItems);

  return (
    <>
      <div className="box2">
        {isLoggedIn && cartItems.length === 0 ? (
          <AddToCar />
        ) : (
          <>
            {cartItems.length === 0 ? (
              <UserNotLoggin setIsLoggedIn={setIsLoggedIn} />
            ) : (
              cartItems.map((item) => (
                <ul key={item.id} className="card-product">
                  <div className="cont-lis-delete">
                    <li>
                      <img src={item.image} alt="" className="img-car-shop" />
                      <div>
                        <ul className="data-products">
                          <li>{item.nombre}</li>
                          <li>Ref: {item.referencia} </li>
                          <li>Unidades: {item.cantidad} </li>
                        </ul>
                      </div>
                    </li>
                    <div>
                      <DeleteOneProductCar item={item} />
                    </div>
                  </div>
                  <hr />
                  <div className="item-sub">
                    <div>
                      <strong className="sub">Valor unidad: </strong>$
                      {formateValue(parseInt(item.valor))}
                    </div>
                    <div>
                      <strong>Subtotal:</strong> ${" "}
                      {formateValue(subTotal(item))}
                    </div>
                  </div>
                </ul>
              ))
            )}
          </>
        )}
        {cartItems.length !== 0 && (
          <button
            onClick={() => navigate("/suministros/cocinas")}
            className="add-product">
            Agregar mas productos <TiShoppingCart />
          </button>
        )}
      </div>
    </>
  );
};
