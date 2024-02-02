import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./index";

const meta = {
  title: "Typographies/Heading",
  tags: ["autodocs"],
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    kind: "h1",
    content: "Dog",
  },
};

export const H2: Story = {
  args: {
    kind: "h2",
    content: "noun",
  },
};

export const H3: Story = {
  args: {
    kind: "h3",
    content: "Meaning",
  },
};
