import type { Meta, StoryObj } from "@storybook/react";

import Loader from "./index";

const meta = {
  title: "Components/Loader",
  tags: ["autodocs"],
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
