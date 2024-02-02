import { useClickOutside } from "../../hooks/useClickOutside";
import { useDarkModeContext } from "../../hooks/useDarkModeContext";
import { useRef } from "react";

import Paragraph from "../../typographies/Paragraph";

type DropdownProps = {
  setIsOpen: (newValue: boolean) => void;
};

const Component = ({ setIsOpen }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkModeContext();

  useClickOutside({ ref: dropdownRef, callback: setIsOpen });

  return (
    <div
      className={`absolute top-16 z-20 rounded border-2 px-8 py-4 md:top-20 ${isDarkMode ? "bg-shark shadow-lg shadow-electricViolet" : "bg-white shadow-xl"}`}
      ref={dropdownRef}
    >
      <Paragraph kind="p" css="dropdown-text" content="Serif" />
      <Paragraph kind="p" css="dropdown-text" content="Sans-serif" />
      <Paragraph kind="p" css="dropdown-text" content="Mono" />
    </div>
  );
};

export default Component;
