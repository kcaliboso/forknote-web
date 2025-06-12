import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";

import { router } from "./router.tsx";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
