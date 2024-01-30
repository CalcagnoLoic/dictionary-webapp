import type { Meta, StoryObj } from "@storybook/react";

import LogoIcon from "./index";

const meta = {
  title: "Icons/LogoIcon",
  tags: ["autodocs"],
  component: LogoIcon,
} satisfies Meta<typeof LogoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
