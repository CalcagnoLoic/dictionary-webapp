import { createContext } from "react";

export type FontType = "Serif" | "Sans-serif" | "Mono";

export interface FontContextType {
  font: FontType;
  toggleFont: (font: FontType) => void;
}

export const FontContext = createContext<FontContextType>({
  font: "Serif",
  toggleFont: () => {},
});
