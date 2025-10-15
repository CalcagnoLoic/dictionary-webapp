import { useContext } from "react";
import { FontContext } from "../context/Font/FontContext";

export const useFontContext = () => {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error("Context must be have a Provider");
  }

  return context;
};
