import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "./index";

const meta = {
  title: "Typographies/Paragraph",
  tags: ["autodocs"],
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const P: Story = {
  args: {
    kind: "p",
    css: "mt-5 text-shark",
    content:
      "Any member of the Family Canidae, including domestic dogs, wolves, coyotes, jackals, foxes, and their relatives (extant and extinct); canid.",
  },
};

export const SPAN: Story = {
  args: {
    kind: "p",
    css: "text-xl text-electricViolet",
    content: "/ˈdɪkʃəˌnɛɹi/",
  },
};
