import { lazy } from "react";

export const GoogleLogin = lazy(() => import("./Google/GoogleLogin"));
export const RecoverForm = lazy(() => import("./passwordRecovery/RecoverForm"));
export const ResetSucess = lazy(() => import("./passwordRecovery/ResetSucces"));
export const SucessRequest = lazy(() =>
  import("./passwordRecovery/SuccessRequest")
);
