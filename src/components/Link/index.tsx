interface LinkProps {
  href: string;
  css?: string;
  content: string | React.ReactNode;
  target?: string;
}

const Component = ({ href, css, content, target }: LinkProps) => (
  <a href={href} className={css} target={target}>
    {content}
  </a>
);

export default Component;
