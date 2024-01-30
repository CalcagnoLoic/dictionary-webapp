import type { Meta, StoryObj } from "@storybook/react";

import Switcher from "./index";

const meta = {
  title: "Components/Switcher",
  tags: ["autodocs"],
  component: Switcher,
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
