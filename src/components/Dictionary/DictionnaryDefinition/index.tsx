import { MeaningProps } from "../../../types/type";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ meaning }: MeaningProps) => {
  return (
    <ul className="my-5 ml-5 md:ml-10">
      {meaning.definitions.map((definition, definitionIndex) => (
        <>
          <li key={definitionIndex} className="list-disc text-electricViolet">
            <Paragraph
              kind="p"
              css="mt-5 ml-3 text-shark custom-style-list"
              content={definition.definition}
            />
          </li>
          {definition.example && (
            <li>
              <Paragraph
                kind="span"
                css="ml-3 text-silverChalice"
                content={`" ${definition.example} "`}
              />
            </li>
          )}
        </>
      ))}
    </ul>
  );
};

export default Component;
