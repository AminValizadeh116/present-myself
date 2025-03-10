import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
// import './main.css'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>

      <StrictMode>
        <App />
      </StrictMode>

  </BrowserRouter>
);
