import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Home from "../pages/Home/Home";
import DetailsPage from "../components/DetailsPage/DetailsPage";
import PrivateRoute from "../Hooks/PrivateRoute";
import About from "../pages/About/About";
import ErrorPage from "../components/Error/ErrorPage";
import Motive from "../pages/About/Motive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/motive",
        element: <Motive />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: 
          <PrivateRoute>
            <DetailsPage />,
          </PrivateRoute>  ,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default router;
