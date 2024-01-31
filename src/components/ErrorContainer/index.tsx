import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <section className="text-center mt-12">
    <span className="text-7xl">😕</span>
    <Heading kind="h2" content="No definitions found" />
    <Paragraph
      css=""
      content="Sorry pal, we couldn't find definitions for the word you were looking for."
    />
  </section>
);

export default Component;
