import Link from "../Link";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <footer className="pt-8">
    <Paragraph
      kind="p"
      css="text-center text-shark"
      content={
        <>
          Coding with love by{" "}
          <Link
            href="https://github.com/CalcagnoLoic"
            target="_blank"
            content={"@CalcagnoLoic 🎉"}
          />
        </>
      }
    />
  </footer>
);

export default Component;
