import type { Meta, StoryObj } from "@storybook/react";

import PlayIcon from "./index";

const meta = {
  title: "Icons/PlayIcon",
  tags: ["autodocs"],
  component: PlayIcon,
} satisfies Meta<typeof PlayIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
