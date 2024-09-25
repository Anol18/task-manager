import { lazy } from "react";
import { PRIVATE_ROUTES } from "./path";
// import { PERMISSION_ROLE } from "../utils/permission";
export const privateRoutes = [
	{
		path: PRIVATE_ROUTES.DASHBOARD,
		Component: lazy(() => import("../pages/dashboard")),
	},
	{
		path: PRIVATE_ROUTES.TASK_LIST,
		Component: lazy(() => import("../pages/task-list")),
	},
	{
		path: PRIVATE_ROUTES.TASK_DETAILS,
		Component: lazy(() => import("../pages/task-details")),
	},
	{
		path: PRIVATE_ROUTES.SETTINGS,
		Component: lazy(() => import("../pages/settings")),
	},
	{
		path: PRIVATE_ROUTES.NOT_FOUND,
		Component: lazy(() => import("../pages/not-found")),
	},
];
