import type { Meta, StoryObj } from "@storybook/react";

import ArrowIcon from "./index";

const meta = {
  title: "Icons/ArrowIcon",
  tags: ["autodocs"],
  component: ArrowIcon,
} satisfies Meta<typeof ArrowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
