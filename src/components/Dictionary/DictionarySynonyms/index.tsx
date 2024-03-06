import { MeaningProps } from "../../../types/type";

import Link from "../../Link";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ meaning }: MeaningProps) => {
  return (
    <>
      {meaning.synonyms.length > 0 && (
        <div className="flex flex-col md:flex-row">
          <Paragraph
            kind="p"
            css="mt-5 font-bold text-silverChalice mr-6"
            content="Synonyms"
          />
          {meaning.synonyms
            .slice(0, 5)
            .map((synonym: string, index: number) => (
              <Link
                css="mt-1 md:mt-5 font-bold text-electricViolet mr-1 underline"
                content={synonym}
                key={index}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default Component;
