// Pages Import
import { Home, Community, Classes, Services, Profile } from "../pages";

// project imports
import Layout from "../Layout";
import { Navigate } from "react-router-dom";

// sample page routing
// import { lazy } from "react";
// import Loadable from "components/Loadable";
// const SamplePage = Loadable(lazy(() => import("pages/admin/sample-page")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = (isLoggedIn: boolean) => {
  return {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "community",
        element: <Community />,
      },
      ...(isLoggedIn
        ? [
            {
              path: "classes",
              element: <Classes />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
          ]
        : []),
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "*",
        element: isLoggedIn ? (
          <Navigate to="/" />
        ) : (
          <Navigate to="/auth/login" />
        ),
      },
    ],
  };
};

export default MainRoutes;