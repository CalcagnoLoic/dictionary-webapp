import Paragraph from "../../../typographies/Paragraph";
import Heading from "../../../typographies/Heading";
import PlayIcon from "../../../icons/PlayIcon";

interface PhoneticProps {
  word: string;
  phonetic: string;
}

const Component = ({ word, phonetic }: PhoneticProps) => {
  return (
    <div className="flex justify-between">
      <div className="self-center">
        <Heading kind="h1" content={word} />

        <Paragraph css="mt-3 text-xl text-electricViolet" content={phonetic} />
      </div>
      <PlayIcon />
    </div>
  );
};

export default Component;
