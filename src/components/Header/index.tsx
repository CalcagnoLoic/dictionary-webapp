import DarkModeIcon from "../../icons/DarkModeIcon";
import LogoIcon from "../../icons/LogoIcon";
import SelectBox from "../SelectBox";
import Switcher from "../Switcher";

const Component = () => (
  <header className="flex justify-between">
    <LogoIcon />

    <div className="flex self-center">
      <SelectBox />
      <div className="border-[1px]"></div>
      <Switcher />
      <DarkModeIcon />
    </div>
  </header>
);

export default Component;
