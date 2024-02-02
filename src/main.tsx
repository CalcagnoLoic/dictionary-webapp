import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../public/assets/style/index.css";
import { DarkModeProvider } from "./context/DarkModeContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
);
