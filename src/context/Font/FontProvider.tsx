import { useState } from "react";
import { FontContext, FontContextType, FontType } from "./FontContext";

const CLASS_SERIF = "font-txt-serif";
const CLASS_SANS_SERIF = "font-txt-sans";
const CLASS_MONO = "font-txt-mono";

type FontProvider = {
  children: JSX.Element | JSX.Element[];
};

export const FontProvider = ({ children }: FontProvider) => {
  const [font, setFont] = useState<FontType>("Serif");

  const toggleFont = (selectedFont: FontType) => {
    setFont(selectedFont);
    document.body.classList.remove(CLASS_SANS_SERIF, CLASS_MONO, CLASS_SERIF);
    switch (selectedFont) {
      case "Sans-serif":
        document.body.classList.add(CLASS_SANS_SERIF);
        break;
      case "Mono":
        document.body.classList.add(CLASS_MONO);
        break;
      default:
        document.body.classList.add(CLASS_SERIF);
        break;
    }
  };

  const contextValue: FontContextType = {
    font,
    toggleFont,
  };

  return (
    <FontContext.Provider value={contextValue}>{children}</FontContext.Provider>
  );
};
