import { useNotification, useCarShop } from "../../../../../hook";
import { RiDeleteBin5Line } from "../../../../../assets/icons/reactIcons";
import { NotificationToast } from "../../../../../utils";

// Boton para eliminar un producto del carrito

export const DeleteOneProductCar = ({ item }) => {
  const { deleFromCar } = useCarShop();
  const { setShowToast, setToastMessage, setBgToast } = useNotification();

  const handleDeleteProduct = () => {
    deleFromCar(item.id);
    setBgToast("danger");
    setShowToast(true);
    setToastMessage("Eliminaste un producto de tu carrito");
  };

  return (
    <>
      <NotificationToast text={"Detalles del carrito"} />
      <button className="delete" onClick={handleDeleteProduct}>
        Eliminar <RiDeleteBin5Line className="icon" />
      </button>
    </>
  );
};
