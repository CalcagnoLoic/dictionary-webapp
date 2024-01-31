interface Paragraph {
  css: string;
  content: string | string[] | React.ReactNode;
}

const Typographies = ({ css, content }: Paragraph) => (
  <p className={css}>{content}</p>
);

export default Typographies;
