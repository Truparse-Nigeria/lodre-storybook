import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Checkbox, { CheckboxControlProps } from "../components/checkbox";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story = ({
  ...args
}: CheckboxControlProps | React.InputHTMLAttributes<InputEvent>) => (
  <label>
    <Checkbox {...args} />
  </label>
);

export const PrimaryCheckbox = Template.bind({});
PrimaryCheckbox.args = {
  label: "Hello World!",
  onChange: () => {},
};
