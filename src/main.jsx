import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import ErrorPage from "./Components/ErropPage/ErrorPage.jsx";
import Details from "./Components/Details/Details.jsx";
import CartContext from "./CartContext.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import { Toaster } from "react-hot-toast";
import Career from "./Career/Career";
import Statistics from "./Statistics/Statistics";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          loader: () => fetch("products.json"),
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/career",
          element: <Career></Career>,
          loader: () => fetch("career.json"),
        },
        {
          path: "/details/:product_id",
          element: <Details></Details>,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
    <Toaster position="top-center" reverseOrder={true} />
  </StrictMode>
);
