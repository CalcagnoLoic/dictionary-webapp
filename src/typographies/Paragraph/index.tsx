interface Paragraph {
  css: string;
  content: string;
}

const Component = ({ css, content }: Paragraph) => (
  <p className={css}>{content}</p>
);

export default Component;
