import { createContext } from "react";

const CLASS_SERIF = "font-txt-serif";
const CLASS_SANS_SERIF = "font-txt-sans";
const CLASS_MONO = "font-txt-mono";

interface FontProps {
  toggleFontSerif: React.MouseEventHandler<HTMLParagraphElement>;
  toggleFontSansSerif: React.MouseEventHandler<HTMLParagraphElement>;
  toggleFontMono: React.MouseEventHandler<HTMLParagraphElement>;
}

type FontProvider = {
  children: JSX.Element | JSX.Element[];
};

export const FontContext = createContext<FontProps>({
  toggleFontSerif: () => {},
  toggleFontSansSerif: () => {},
  toggleFontMono: () => {},
});

export const FontProvider = ({ children }: FontProvider) => {
  const toggleFont = (font: string) => {
    document.body.classList.remove(CLASS_SERIF, CLASS_SANS_SERIF, CLASS_MONO);
    document.body.classList.add(font);
  };

  const contextValue: FontProps = {
    toggleFontSerif: () => toggleFont(CLASS_SERIF),
    toggleFontSansSerif: () => toggleFont(CLASS_SANS_SERIF),
    toggleFontMono: () => toggleFont(CLASS_MONO),
  };

  return (
    <FontContext.Provider value={contextValue}>{children}</FontContext.Provider>
  );
};
