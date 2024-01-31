import { APIResponse } from "../../../types/interface";
import { useEffect, useState } from "react";

import DictionaryMeaningsContainer from "../DictionaryMeaningsContainer";
import DictionaryPhoneticsContainer from "../DictionaryPhoneticsContainer";
import DictionarySourceUrlsContainer from "../DictionarySourceUrlsContainer";
import ErrorContainer from "../../ErrorContainer";
import Line from "../../Line";
import Loader from "../../Loader";

const Component = () => {
  const [data, setData] = useState<APIResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard",
        );

        if (!response.ok) {
          setIsError(true);
          return;
        }

        const data = await response.json();

        if (data.length > 0) {
          setData(data[0]);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <section>
      {isLoading && !isError && <Loader />}

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

      {isError && <ErrorContainer />}
    </section>
  );
};

export default Component;
