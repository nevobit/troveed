import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";

export const placesRoutes: RouteObject[] = [
    {
      path: '/places',
      element: <Home />
    },
  ];