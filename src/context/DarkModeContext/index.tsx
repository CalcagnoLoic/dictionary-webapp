import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const systemsSettings = window.matchMedia("(prefers-color-scheme: dark)");
    if (systemsSettings.matches) setIsDarkMode(true);
    systemsSettings.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

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
