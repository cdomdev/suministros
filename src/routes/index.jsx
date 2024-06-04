import { lazy } from "react";

export { DashboardUser } from "./DashboardUser";
export const DashBoardAdmin = lazy(() => import("../routes/DashBoardAdmin"));
