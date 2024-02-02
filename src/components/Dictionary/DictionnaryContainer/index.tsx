import { useFetch } from "../../../hooks/useFetch";

import DictionaryMeanings from "../DictionaryMeanings";
import DictionaryPhonetics from "../DictionaryPhonetics";
import DictionarySourceUrls from "../DictionarySourceUrls";
import ErrorContainer from "../../ErrorContainer";
import Line from "../../Line";
import Loader from "../../Loader";

const Component = ({ word }: { word: string }) => {
  const { isLoading, isData, isError } = useFetch(word);

  return (
    <section>
      {isLoading && !isError && <Loader />}

      {isData && (
        <>
          <DictionaryPhonetics
            word={isData.word}
            phonetic={isData.phonetic}
            audio={
              isData.phonetics.length > 0
                ? isData.phonetics.find((entry) => entry.audio)?.audio
                : undefined
            }
          />

          <DictionaryMeanings meanings={isData.meanings} />

          <Line />

          <DictionarySourceUrls sourceUrls={isData.sourceUrls} />
        </>
      )}

      {isError && <ErrorContainer />}
    </section>
  );
};

export default Component;
