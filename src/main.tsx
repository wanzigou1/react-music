import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "@/style/global";
import { RouterProvider } from "react-router-dom";
import route from "./router/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle></GlobalStyle>
    <RouterProvider router={route} />
  </StrictMode>
);
