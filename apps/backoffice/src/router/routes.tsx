import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import { placesRoutes } from "../features/places/router";

export const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        ...placesRoutes
      ]
    },
  ];