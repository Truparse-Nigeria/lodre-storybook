import React, { InputHTMLAttributes } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Range, { RangeControlProps } from "../components/range/index";

export default {
  title: "Components/Form/Range",
  component: Range,
} as Meta;

const Template: Story = ({
  ...args
}: RangeControlProps | InputHTMLAttributes<InputEvent>) => (
  <label>
    <Range {...args} />
  </label>
);

export const PrimaryRange = Template.bind({});
PrimaryRange.args = {
  minValue: "99",
  maxValue: "150000",
  minProps: {
    onChange: (e) => console.log(e.target.value),
  },
  maxProps: {
    onChange: (e) => console.log(e.target.value),
  },
};
