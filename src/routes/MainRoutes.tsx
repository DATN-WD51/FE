import type { RouteObject } from "react-router";
import MainLayout from "../common/layouts/MainLayout";
import HomePage from "../pages/client/home/HomePage";
import VerifyUser from "../pages/client/auth/VerifyUser";
import LoginGoogle from "../pages/client/auth/LoginGoogle";
import DetailMovie from "../pages/client/movie/detail/DetailMovie";
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
    path: "movie/:id",
    element: <DetailMovie />,
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
