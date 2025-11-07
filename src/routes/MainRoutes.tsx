import type { RouteObject } from "react-router";
import MainLayout from "../common/layouts/MainLayout";
import HomePage from "../pages/client/home/HomePage";
import VerifyUser from "../pages/client/auth/VerifyUser";
import LoginGoogle from "../pages/client/auth/LoginGoogle";

export const MainRoutes: RouteObject[] = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "login-google/:token",
    element: <LoginGoogle />,
  },
  {
    path: "verify",
    element: <VerifyUser />,
  },
];
