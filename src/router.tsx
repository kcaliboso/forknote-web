import { createBrowserRouter, redirect } from "react-router";
import Guest from "./layouts/guest.tsx";
import Login from "./pages/auth/login.tsx";
import Register from "./pages/auth/register.tsx";
import App from "./App";
import ErrorPage from "./pages/error-page.tsx";
import { RequireAuth } from "./components/require-auth.tsx";
import UserRecipeList from "./pages/my/recipe/list.tsx";
import Auth from "./layouts/auth.tsx";
import AboutPage from "./pages/about.tsx";
import ContactPage from "./pages/contact-us.tsx";
import DefaultLayout from "./layouts/default.tsx";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <Guest />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/auth",
            children: [
              { index: true, loader: () => redirect("/auth/login") },
              {
                path: "login",
                element: <Login />,
              },
              {
                path: "register",
                element: <Register />,
              },
            ],
          },
        ],
      },
      {
        element: <RequireAuth />,
        path: "my",
        children: [
          {
            element: <Auth />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "recipe",
                children: [
                  {
                    path: "list",
                    element: <UserRecipeList />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);
