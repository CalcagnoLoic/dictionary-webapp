import { useDarkModeContext } from "../../hooks/useDarkModeContext";

interface Paragraph {
  kind: "p" | "span";
  css?: string;
  content: string | string[] | React.ReactNode;
}

const Typographies = ({ kind, css, content }: Paragraph) => {
  const { isDarkMode } = useDarkModeContext();

  if (kind === "p") {
    return (
      <p className={`${css} ${isDarkMode ? "text-white" : "text-shark"}`}>
        {content}
      </p>
    );
  }

  return <span className={css}>{content}</span>;
};

export default Typographies;
