import { createContext } from "react";

interface DarkModeProps {
  isDarkMode: boolean;
  toggleDarkMode: (newValue: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});
