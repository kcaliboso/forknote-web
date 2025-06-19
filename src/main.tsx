import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";

import { router } from "./router.tsx";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
