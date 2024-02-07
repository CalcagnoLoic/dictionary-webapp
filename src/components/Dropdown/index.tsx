import { useClickOutside } from "../../hooks/useClickOutside";
import { useDarkModeContext } from "../../hooks/useDarkModeContext";
import { useFontContext } from "../../hooks/useFontContext";
import { useRef } from "react";

import Paragraph from "../../typographies/Paragraph";

type DropdownProps = {
  setIsOpen: (newValue: boolean) => void;
};

const Component = ({ setIsOpen }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkModeContext();
  const { toggleFont } = useFontContext();

  useClickOutside({ ref: dropdownRef, callback: setIsOpen });

  return (
    <div
      className={`absolute top-16 z-20 w-[170px] rounded border-2 px-8 py-4 md:top-20 ${isDarkMode ? "bg-shark shadow-lg shadow-electricViolet" : "bg-white shadow-xl"}`}
      ref={dropdownRef}
    >
      <Paragraph
        handleClick={() => toggleFont("Serif")}
        kind="p"
        css="dropdown-text font-serif"
        content="Serif"
      />
      <Paragraph
        handleClick={() => toggleFont("Sans-serif")}
        kind="p"
        css="dropdown-text font-sans"
        content="Sans-serif"
      />
      <Paragraph
        handleClick={() => toggleFont("Mono")}
        kind="p"
        css="dropdown-text font-mono"
        content="Mono"
      />
    </div>
  );
};

export default Component;
