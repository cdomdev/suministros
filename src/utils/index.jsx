import { lazy } from "react";

export const DecodedJWT = lazy(() => import("./DecodedJWT"));
export const getTitleFronPath = lazy(() => import("./getTitleFronPath"));
export { obtenerMarcasUnicas, obtenerSubCategorias } from "./funtionsProducts";
export { SaveStorage } from "./SaveStorage";
export { getDataSesionStorega, getDataStorage } from "./getDataStorage";
export { NotificationToast } from "./NotificationToast";
export { LoaderComponent, LoaderPage } from "./Loaders";
export { Migajas } from "./Migajas";
export { IconNavigateCar } from "./IconNavigateCar";
export { BtnWhatsapp } from "./BtnWhatsapp";
export { Steps } from "./Steps";
