import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Divider, { DividerProps } from "../components/divider";
import { PALETTE } from "../tokens/color";

export default {
  title: "Layout/Divider",
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = ({ ...args }: DividerProps) => (
  <Divider {...args} />
);

export const PrimaryDivider = Template.bind({});
PrimaryDivider.args = {
  colorValue: PALETTE["primary"],
};
