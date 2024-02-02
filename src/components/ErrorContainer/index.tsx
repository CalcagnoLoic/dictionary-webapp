import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <section className="mt-12 text-center">
    <Paragraph kind="span" css="text-7xl" content="😕" />

    <Heading kind="h2" content="No definitions found" />

    <Paragraph
      kind="p"
      content="Sorry pal, we couldn't find definitions for the word you were looking for."
    />
  </section>
);

export default Component;
