import Paragraph from "../../../typographies/Paragraph";
import NewWindowIcon from "../../../icons/NewWindowIcon";

type SourceUrlsProps = {
  sourceUrls: string;
};

const Component = ({ sourceUrls }: SourceUrlsProps) => {
  const primarySourceUrl = Array.isArray(sourceUrls)
    ? sourceUrls[0]
    : sourceUrls;

  return (
    <div className="mt-5 flex flex-col text-sm md:flex-row">
      <Paragraph css="text-scorpion mr-5" content="Source" />
      <a
        href={sourceUrls}
        target="_blank"
        className="flex gap-2  text-shark underline "
      >
        {primarySourceUrl}
        <NewWindowIcon />
      </a>
    </div>
  );
};

export default Component;
