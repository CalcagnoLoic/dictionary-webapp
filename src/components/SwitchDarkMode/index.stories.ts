import type { Meta, StoryObj } from "@storybook/react";

import SwitchDarkMode from "./index";

const meta = {
  title: "Components/SwitchDarkMode",
  tags: ["autodocs"],
  component: SwitchDarkMode,
} satisfies Meta<typeof SwitchDarkMode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
