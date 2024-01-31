import type { Meta, StoryObj } from "@storybook/react";

import ErrorContainer from "./index";

const meta = {
  title: "Components/ErrorContainer",
  tags: ["autodocs"],
  component: ErrorContainer,
} satisfies Meta<typeof ErrorContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
