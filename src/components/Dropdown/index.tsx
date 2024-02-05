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
  const { toggleFontSerif, toggleFontSansSerif, toggleFontMono } =
    useFontContext();

  useClickOutside({ ref: dropdownRef, callback: setIsOpen });

  return (
    <div
      className={`absolute top-16 z-20 w-[170px] rounded border-2 px-8 py-4 md:top-20 ${isDarkMode ? "bg-shark shadow-lg shadow-electricViolet" : "bg-white shadow-xl"}`}
      ref={dropdownRef}
    >
      <Paragraph
        handleClick={toggleFontSerif}
        kind="p"
        css="dropdown-text"
        content="Serif"
      />
      <Paragraph
        handleClick={toggleFontSansSerif}
        kind="p"
        css="dropdown-text"
        content="Sans-serif"
      />
      <Paragraph
        handleClick={toggleFontMono}
        kind="p"
        css="dropdown-text"
        content="Mono"
      />
    </div>
  );
};

export default Component;
