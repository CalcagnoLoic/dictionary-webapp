import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("Context must have a Provider");
  }

  return context;
};
