import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Search } from "./pages";
import { RouterProps } from "./interfaces/general.interface";

export const routes = [
  {
    path: "/",
    element: <Home />,
    key: 1,
    exact: true,
  },
  {
    path: "/search",
    element: <Search />,
    key: 2,
    exact: true,
  },
];

const Router = ({ routes }: { routes: Array<RouterProps> }) => {
  const renderRoutes = () => {
    return (
      <>
        {routes &&
          routes?.map((e: RouterProps, key: Number) => {
            const { path, element: Component } = e;
            return (
              <>
                <Route id={key.toString()} path={path} element={Component} />
              </>
            );
          })}
      </>
    );
  };

  return <Routes>{renderRoutes()}</Routes>;
};

export default Router;
