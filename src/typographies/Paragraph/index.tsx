import { useDarkModeContext } from "../../hooks/useDarkModeContext";

interface Paragraph {
  kind: "p" | "span";
  css?: string;
  content: string | string[] | React.ReactNode;
  handleClick?: React.MouseEventHandler<HTMLParagraphElement | HTMLSpanElement>;
}

const Typographies = ({ kind, css, content, handleClick }: Paragraph) => {
  const { isDarkMode } = useDarkModeContext();

  if (kind === "p") {
    return (
      <p
        onClick={handleClick}
        className={`${css} ${isDarkMode ? "text-white" : "text-shark"}`}
      >
        {content}
      </p>
    );
  }

  return <span className={css}>{content}</span>;
};

export default Typographies;
