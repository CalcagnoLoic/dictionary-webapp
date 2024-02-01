import { ChangeEvent, FormEvent, useState } from "react";

import Paragraph from "../../typographies/Paragraph";
import SearchIcon from "../../icons/SearchIcon";

interface InputProps {
  handleInputChange: (value: string) => void;
  searchWord: string;
}

const Component = ({ handleInputChange, searchWord }: InputProps) => {
  const [errorValue, setErrorValue] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(searchWord);

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
          className="z-10 my-12 w-full rounded-xl bg-gallery p-4 font-bold text-shark outline-none"
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
          css="text-red-500 text-sm italic -mt-10 font-bold"
          content="Input musn't be empty!"
        />
      )}
    </>
  );
};

export default Component;
