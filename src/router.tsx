import { createBrowserRouter, redirect } from "react-router";
import Login from "@/pages/auth/login.tsx";
import Register from "@/pages/auth/register.tsx";
import ErrorPage from "@/pages/error-page.tsx";
import RequireAuth from "@/components/require-auth.tsx";
import UserRecipeList from "@/pages/my/recipe/list.tsx";
import AboutPage from "@/pages/about.tsx";
import ContactPage from "@/pages/contact-us.tsx";
import DefaultLayout from "@/layouts/default.tsx";
import RecipesPage from "@/pages/recipes.tsx";
import HomePage from "@/pages/home";
import RecipeDetailsPage from "./pages/my/recipe/details";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
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
        errorElement: <ErrorPage />,
        children: [
          {
            errorElement: <ErrorPage />,
            children: [
              {
                path: "recipe",
                children: [
                  {
                    path: "list",
                    element: <UserRecipeList />,
                  },
                  {
                    path: ":id",
                    element: <RecipeDetailsPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
      },
    ],
  },
]);
