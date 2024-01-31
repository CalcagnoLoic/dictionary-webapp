import { APIResponse } from "../../../types/interface";
import { useEffect, useState } from "react";

import DictionaryMeaningsContainer from "../DictionaryMeaningsContainer";
import DictionaryPhoneticsContainer from "../DictionaryPhoneticsContainer";
import DictionarySourceUrlsContainer from "../DictionarySourceUrlsContainer";
import Line from "../../Line";
import Loader from "../../Loader";

const Component = () => {
  const [data, setData] = useState<APIResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //const input = null;

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dog")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [setIsLoading]);

  return (
    <section>
      {isLoading && <Loader />}

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
