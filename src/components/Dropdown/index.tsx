import { useRef } from "react";
import Paragraph from "../../typographies/Paragraph";
import { useClickOutside } from "../../hooks/useClickOutside";

type DropdownProps = {
  setIsOpen: (newValue: boolean) => void;
};

const Component = ({ setIsOpen }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: dropdownRef, callback: setIsOpen });

  return (
    <div
      className="absolute top-16 z-20 rounded border-2 bg-white px-8 py-4 shadow-xl md:top-20"
      ref={dropdownRef}
    >
      <Paragraph css="dropdown-text" content="Serif" />
      <Paragraph css="dropdown-text" content="Sans-serif" />
      <Paragraph css="dropdown-text" content="Mono" />
    </div>
  );
};

export default Component;
