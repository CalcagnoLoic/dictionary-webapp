import type { Preview } from "@storybook/react";
import autodoc from "./autodoc.mdx"
import "../public/assets/style/index.css"

const preview: Preview = {
  parameters: {
    docs: {
      page: autodoc,
    },
  },
};

export default preview;
