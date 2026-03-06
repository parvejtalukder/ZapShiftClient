import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: Root,
    children: [
        {index: true, Component: Home},
        // {errorElement: <p>404</p>}
    ]
  },
]);