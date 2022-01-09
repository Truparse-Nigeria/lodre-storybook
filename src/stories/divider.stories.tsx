import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Divider from "../components/divider";
import { PALETTE } from "../tokens/color";

export default {
  title: "Components/Layout/Divider",
  component: Divider,
} as Meta;

const Template: Story = ({ ...args }) => <Divider {...args} />;

export const PrimaryDivider = Template.bind({});
PrimaryDivider.args = {
  hexValue: PALETTE.primary,
};
