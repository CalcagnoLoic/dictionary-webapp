import type { Meta, StoryObj } from "@storybook/react";

import Input from "./index";

const meta = {
  title: "Components/Input",
  tags: ["autodocs"],
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
