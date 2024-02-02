import { useDarkModeContext } from "../../../hooks/useDarkModeContext";

import Link from "../../Link";
import NewWindowIcon from "../../../icons/NewWindowIcon";
import Paragraph from "../../../typographies/Paragraph";

type SourceUrlsProps = {
  sourceUrls: string;
};

const Component = ({ sourceUrls }: SourceUrlsProps) => {
  const { isDarkMode } = useDarkModeContext();

  const primarySourceUrl = Array.isArray(sourceUrls)
    ? sourceUrls[0]
    : sourceUrls;

  return (
    <div className="mt-5 flex flex-col text-sm md:flex-row">
      <Paragraph kind="p" css="text-scorpion mr-5" content="Source" />
      <Link
        href={sourceUrls}
        target="_blank"
        css={`flex gap-2 underline ${isDarkMode ? "text-white" : "text-shark"}`}
        content={
          <>
            {primarySourceUrl}
            <NewWindowIcon />
          </>
        }
      />
    </div>
  );
};

export default Component;
