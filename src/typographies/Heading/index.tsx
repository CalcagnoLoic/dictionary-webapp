interface TypographiesHeading {
  kind: "h1" | "h2" | "h3";
  content: string;
}

const Typographies = ({ kind, content }: TypographiesHeading) => {
  if (kind === "h1") {
    return (
      <h1 className="text-3xl font-extrabold text-shark md:text-5xl">
        {content}
      </h1>
    );
  }
  if (kind === "h2") {
    return (
      <h2 className="my-6 text-xl font-bold italic text-shark">{content}</h2>
    );
  }
  if (kind === "h3") {
    return <h3 className="text-silverChalice font-bold text-lg">{content}</h3>;
  }
};

export default Typographies;
