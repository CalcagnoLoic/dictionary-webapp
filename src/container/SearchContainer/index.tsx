import { useState } from "react";

import DictionnaryContainer from "../../components/Dictionary/DictionnaryContainer";
import Input from "../../components/Input";

const Container = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  const handleInputChange = (value: string): void => {
    setSearchWord(value);
  };

  return (
    <main>
      <Input handleInputChange={handleInputChange} searchWord={searchWord} />
      {searchWord && <DictionnaryContainer word={searchWord} />}
    </main>
  );
};

export default Container;
