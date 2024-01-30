import type { Meta, StoryObj } from "@storybook/react";

import SelectBox from "./index";

const meta = {
  title: "Components/SelectBox",
  tags: ["autodocs"],
  component: SelectBox,
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
