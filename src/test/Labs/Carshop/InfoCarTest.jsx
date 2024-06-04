import { useContext } from "react";
import { RiDeleteBin5Line } from "../../../assets/icons/reactIcons";
import { carshopContext } from "../mockContext";

export const InfoCarTest = () => {
  const { cartItems } = useContext(carshopContext);

  return (
    <>
      <div className="box2">
        {cartItems.map((item) => (
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
                <button className="delete">
                  Eliminar <RiDeleteBin5Line className="icon" />
                </button>
              </div>
            </div>
            <hr />
            <div className="item-sub">
              <div>
                <strong className="sub">Valor unidad: </strong> ${item.valor}
              </div>
              <div>
                <strong>Subtotal:</strong> $ {item.cantidad * item.valor}
              </div>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};
