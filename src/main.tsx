import { DarkModeProvider } from "./context/DarkModeContext/index.tsx";
import { FontProvider } from "./context/FontContext/index.tsx";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "../public/assets/style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </DarkModeProvider>
  </React.StrictMode>,
);
