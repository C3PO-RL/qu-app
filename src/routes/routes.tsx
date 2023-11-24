import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../shared/components/Layout";
import Planets from "../pages/planets/Planets";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store/hooks";
import { getPlanets } from "../redux/slices/planetSlice";
import PlanetDetail from "../pages/details/PlanetDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Planets />,
      },
      {
        path: "/details/:name",
        element: <PlanetDetail />,
      },
    ],
  },
]);

const AppRoutes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const execute = async () => {
      dispatch(getPlanets());
    };

    execute();
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
