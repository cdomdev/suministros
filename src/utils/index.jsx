import { lazy } from "react";

export { DecodedJWT } from "./DecodedJWT";
export const getTitleFronPath = lazy(() => import('./getTitleFronPath'))
export {obtenerMarcasUnicas, obtenerSubCategorias} from './funtionsProducts'
export { SaveStorage } from "./SaveStorage";
export { getDataSesionStorega, getDataStorage } from "./getDataStorage";
export {
  IconNavigateCar,
  Migajas,
  NotificationToast,
  LoaderComponent,
  LoaderPage,
} from "./ComponentsUtils";

export const Steps = lazy(() =>import('./ComponentsUtils'))
