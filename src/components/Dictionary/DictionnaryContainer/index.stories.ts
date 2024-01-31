import type { Meta, StoryObj } from "@storybook/react";

import Dictionary from "./index";

const meta = {
  title: "Components/Dictionary",
  tags: ["autodocs"],
  component: Dictionary,
} satisfies Meta<typeof Dictionary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
