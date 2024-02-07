import { useState, useRef } from "react";

import DictionnaryContainer from "../../components/Dictionary/DictionnaryContainer";
import { useDarkModeContext } from "../../hooks/useDarkModeContext";
import SearchIcon from "../../icons/SearchIcon";
import Paragraph from "../../typographies/Paragraph";

const Container = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchWord, setSearchWord] = useState<string>("");
  const [errorValue, setErrorValue] = useState<boolean>(false);
  const { isDarkMode } = useDarkModeContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current) {
      const inputValue = inputRef.current.value.trim();
      if (inputValue === "") {
        setErrorValue(true);
      } else {
        setErrorValue(false);
        setSearchWord(inputValue);
      }
    }
  };

  return (
    <main>
      <form className="relative flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`z-10  mt-12 w-full rounded-xl p-4 font-bold outline-none ${errorValue ? "mb-0" : "mb-12"} ${isDarkMode ? "bg-shark text-gallery" : "bg-gallery text-shark"}`}
          placeholder="Search a word..."
          defaultValue={searchWord}
          ref={inputRef}
        />

        <button type="submit">
          <SearchIcon />
        </button>
      </form>

      {errorValue && (
        <Paragraph
          kind="span"
          css="text-alizarinCrimson text-sm italic font-bold inline-block"
          content="Input musn't be empty!"
        />
      )}

      {searchWord && <DictionnaryContainer word={searchWord} />}
    </main>
  );
};

export default Container;
