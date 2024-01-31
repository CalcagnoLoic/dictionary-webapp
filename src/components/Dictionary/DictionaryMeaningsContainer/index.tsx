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

            <ul className="custom-style-list ml-5 md:ml-10">
              {meaning.definitions.map((definition, definitionIndex) => (
                <li key={definitionIndex}>
                  <Paragraph
                    css="mt-5 ml-3 text-shark"
                    content={definition.definition}
                  />
                </li>
              ))}
            </ul>

            <ul className="my-5 ml-5 md:ml-10">
              {meaning.definitions.map(
                (definition, definitionIndex) =>
                  definition.example && (
                    <>
                      <li key={definitionIndex}>
                        <Paragraph
                          css="my-1 text-silverChalice ml-3"
                          content={definition.example}
                        />
                      </li>
                    </>
                  ),
              )}
            </ul>

            {meaning.synonyms.length > 0 && (
              <div className="flex flex-col md:flex-row">
                <Paragraph
                  css="mt-5 font-bold text-silverChalice mr-6"
                  content="Synonyms"
                />
                {meaning.synonyms.slice(0, 5).map((synonym, index) => (
                  <Paragraph
                    css="mt-1 md:mt-5 font-bold text-electricViolet mr-1 underline"
                    content={synonym}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </>
);

export default Component;
