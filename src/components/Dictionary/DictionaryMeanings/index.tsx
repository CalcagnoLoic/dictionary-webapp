import { Meaning } from "../../../types/type";

import DictionnaryDefinition from "../DictionnaryDefinition";
import DictionarySynonyms from "../DictionarySynonyms";
import Heading from "../../../typographies/Heading";
import Line from "../../Line";

interface MeaningsProps {
  meanings?: Meaning[];
}

const Component = ({ meanings }: MeaningsProps) => {
  /* const [selectedSynonyms, setSelectedSynonyms] = useState<string>("");
  useFetch(selectedSynonyms);

  const handleClickSynonym = (synonym: string) => {
    setSelectedSynonyms(synonym);
  }; */

  return (
    <>
      {meanings && (
        <div>
          {meanings.map((meaning, index) => (
            <div key={index}>
              <div className="flex">
                <Heading kind="h2" content={meaning.partOfSpeech} />
                <Line additionalCSS="ml-5 mb-4" />
              </div>

              <Heading kind="h3" content="Meaning" />

              <DictionnaryDefinition meaning={meaning} />

              <DictionarySynonyms meaning={meaning} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Component;
