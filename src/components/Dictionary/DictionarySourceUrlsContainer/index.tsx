import Paragraph from "../../../typographies/Paragraph";
import NewWindowIcon from "../../../icons/NewWindowIcon";

type SourceUrlsProps = {
  sourceUrls: string;
};

const Component = ({ sourceUrls }: SourceUrlsProps) => (
  <div className="mt-5 flex flex-col text-sm md:flex-row">
    <Paragraph css="text-scorpion mr-5" content="Source" />
    <a
      href={sourceUrls}
      target="_blank"
      className="flex gap-2 text-shark underline"
    >
      {sourceUrls}
      <NewWindowIcon />
    </a>
  </div>
);

export default Component;
