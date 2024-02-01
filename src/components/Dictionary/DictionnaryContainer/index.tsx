import { useFetch } from "../../../hooks/useFetch";

import DictionaryMeaningsContainer from "../DictionaryMeaningsContainer";
import DictionaryPhoneticsContainer from "../DictionaryPhoneticsContainer";
import DictionarySourceUrlsContainer from "../DictionarySourceUrlsContainer";
import ErrorContainer from "../../ErrorContainer";
import Line from "../../Line";
import Loader from "../../Loader";

const Component = () => {
  const {isLoading, isData, isError } = useFetch("dog")

  return (
    <section>
      {isLoading && !isError && <Loader />}

      {isData && (
        <>
          <DictionaryPhoneticsContainer
            word={isData.word}
            phonetic={isData.phonetic}
            audio={
              isData.phonetics.length > 0
                ? isData.phonetics.find((entry) => entry.audio)?.audio
                : undefined
            }
          />

          <DictionaryMeaningsContainer meanings={isData.meanings} />

          <Line />

          <DictionarySourceUrlsContainer sourceUrls={isData.sourceUrls} />
        </>
      )}

      {isError && <ErrorContainer />}
    </section>
  );
};

export default Component;
