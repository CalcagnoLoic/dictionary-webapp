import { useDarkModeContext } from "../../hooks/useDarkModeContext";

const Component = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <label className="relative mx-3 inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        onClick={() => toggleDarkMode(!isDarkMode)}
      />
      <div className="switch-dark-mode peer peer-checked:bg-electricViolet peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
    </label>
  );
};

export default Component;
