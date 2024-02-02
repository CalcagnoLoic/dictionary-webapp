import { useState } from "react";

import ArrowIcon from "../../icons/ArrowIcon";
import Dropdown from "../Dropdown";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e): void => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex cursor-pointer" onClick={handleClick}>
        <Paragraph kind="p" css="self-center font-bold" content="Serif" />
        <ArrowIcon />
      </div>

      {isOpen && <Dropdown setIsOpen={setIsOpen} />}
    </>
  );
};

export default Component;
