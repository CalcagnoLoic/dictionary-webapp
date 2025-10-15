import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkModeProvider } from "./context/Darkmode/DarkModeProvider.tsx";
import { FontProvider } from "./context/Font/FontProvider.tsx";

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
