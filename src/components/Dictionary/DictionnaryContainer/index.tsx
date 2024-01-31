import { APIResponse } from "../../../types/interface";
import { useEffect, useState } from "react";

import DictionaryMeaningsContainer from "../DictionaryMeaningsContainer";
import DictionaryPhoneticsContainer from "../DictionaryPhoneticsContainer";
import DictionarySourceUrlsContainer from "../DictionarySourceUrlsContainer";
import Line from "../../Line";

const Component = () => {
  const [data, setData] = useState<APIResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dog")
      .then((res) => res.json())
      .then((data) => setData(data[0]))
      .catch((error) => console.log(error));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section>
      {data && (
        <>
          <DictionaryPhoneticsContainer
            word={data.word}
            phonetic={data.phonetic}
            audio={
              data.phonetics.length > 0
                ? data.phonetics.find((entry) => entry.audio)?.audio
                : undefined
            }
          />

          <DictionaryMeaningsContainer meanings={data.meanings} />

          <Line />

          <DictionarySourceUrlsContainer sourceUrls={data.sourceUrls} />
        </>
      )}
    </section>
  );
};

export default Component;
