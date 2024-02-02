import { useDarkModeContext } from "../../hooks/useDarkModeContext";

interface TypographiesHeading {
  kind: "h1" | "h2" | "h3";
  content: string;
}

const Typographies = ({ kind, content }: TypographiesHeading) => {
  const { isDarkMode } = useDarkModeContext();

  if (kind === "h1") {
    return (
      <h1
        className={`text-3xl font-extrabold  md:text-5xl ${isDarkMode ? "text-white" : "text-shark"}`}
      >
        {content}
      </h1>
    );
  }
  if (kind === "h2") {
    return (
      <h2
        className={`my-6 text-xl font-bold italic ${isDarkMode ? "text-white" : "text-shark"}`}
      >
        {content}
      </h2>
    );
  }
  if (kind === "h3") {
    return <h3 className="text-lg font-bold text-silverChalice">{content}</h3>;
  }
};

export default Typographies;
