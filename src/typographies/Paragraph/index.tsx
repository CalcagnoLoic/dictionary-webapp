interface Paragraph {
  css: string;
  content: string | string[];
}

const Typographies = ({ css, content }: Paragraph) => (
  <p className={css}>{content}</p>
);

export default Typographies;
