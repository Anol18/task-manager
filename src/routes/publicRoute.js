import { lazy } from "react";
import { PUBLIC_ROUTES } from "./path";
export const publicRoutes = [
  {
    path: PUBLIC_ROUTES.SIGNIN,
    Component: lazy(() => import("../pages/signin")),
  },
  {
      path:PUBLIC_ROUTES.SIGNUP,
      Component: lazy(()=>import("../pages/signup"))
  },
  {
    path: PUBLIC_ROUTES.NOT_FOUND,
    Component: lazy(() => import("../pages/not-found")),
  },
];
