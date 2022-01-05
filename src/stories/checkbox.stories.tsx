import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Checkbox, { CheckboxProps } from "../components/checkbox/index";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const PrimaryCheckbox = Template.bind({});
PrimaryCheckbox.args = {
  label: "Laptops",
};
