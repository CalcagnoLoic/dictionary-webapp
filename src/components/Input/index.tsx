import { ChangeEvent, FormEvent, useState } from "react";
import { useDarkModeContext } from "../../hooks/useDarkModeContext";

import Paragraph from "../../typographies/Paragraph";
import SearchIcon from "../../icons/SearchIcon";

interface InputProps {
  handleInputChange: (value: string) => void;
  searchWord: string;
}

const Component = ({ handleInputChange, searchWord }: InputProps) => {
  const [errorValue, setErrorValue] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(searchWord);

  const { isDarkMode } = useDarkModeContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputValue.trim() === "" ? setErrorValue(true) : setErrorValue(false);
    handleInputChange(inputValue);
  };

  return (
    <>
      <form className="relative flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`z-10 my-12 w-full rounded-xl p-4 font-bold outline-none ${isDarkMode ? "bg-shark text-gallery" : "bg-gallery text-shark"}`}
          placeholder="Search a word..."
          value={inputValue}
          onChange={handleChange}
        />

        <button type="submit">
          <SearchIcon />
        </button>
      </form>

      {errorValue && (
        <Paragraph
          kind="p"
          css="text-alizarinCrimson text-sm italic -mt-10 font-bold"
          content="Input musn't be empty!"
        />
      )}
    </>
  );
};

export default Component;
