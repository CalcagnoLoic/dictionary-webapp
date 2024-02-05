import { createContext, useState } from "react";

interface DarkModeProps {
  isDarkMode: boolean;
  toggleDarkMode: (newValue: boolean) => void;
}

type DarkModeProvider = {
  children: JSX.Element | JSX.Element[];
};

export const DarkModeContext = createContext<DarkModeProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: DarkModeProvider) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  isDarkMode
    ? document.body.classList.add("bg-mineShaft")
    : document.body.classList.remove("bg-mineShaft");

  const contextValue: DarkModeProps = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
