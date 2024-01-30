import DarkModeIcon from "../../icons/DarkModeIcon";
import LogoIcon from "../../icons/LogoIcon";
import SelectBox from "../SelectBox";
import SwitchDarkMode from "../SwitchDarkMode";

const Component = () => (
  <header className="flex justify-between">
    <LogoIcon />

    <div className="flex self-center">
      <SelectBox />
      <div className="border-[1px]"></div>
      <SwitchDarkMode />
      <DarkModeIcon />
    </div>
  </header>
);

export default Component;
