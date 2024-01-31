import type { Meta, StoryObj } from "@storybook/react";

import NewWindowIcon from "./index";

const meta = {
  title: "Icons/NewWindowIcon",
  tags: ["autodocs"],
  component: NewWindowIcon,
} satisfies Meta<typeof NewWindowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
