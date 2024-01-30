import { Meaning } from "../../../types/type";

import Heading from "../../../typographies/Heading";
import Line from "../../Line";
import Paragraph from "../../../typographies/Paragraph";

interface MeaningsProps {
  meanings?: Meaning[];
}

const Component = ({ meanings }: MeaningsProps) => (
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

            <ul>
              {meaning.definitions.map((definition, definitionIndex) => (
                <li key={definitionIndex}>
                  <Paragraph css="mt-5" content={definition.definition} />
                </li>
              ))}

              {meaning.synonyms.length > 0 && (
                <div className="flex">
                  <Paragraph
                    css="mt-5 font-bold text-nobel mr-6"
                    content="Synonyms"
                  />
                  <Paragraph
                    css="mt-5 font-bold text-electricViolet "
                    content={meaning.synonyms}
                  />
                </div>
              )}
            </ul>

            <ul>
              {meaning.definitions.map(
                (definition, definitionIndex) =>
                  definition.example && (
                    <li key={definitionIndex}>
                      <Paragraph
                        css="my-5 text-scorpion"
                        content={definition.example}
                      />
                    </li>
                  ),
              )}
            </ul>
          </div>
        ))}
      </div>
    )}
  </>
);

export default Component;
