import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Input, { IInput } from "../components/input";
import { EyeClose } from "../icons";

export default {
  title: "Components/Form/Inputs",
  component: Input,
} as Meta;

const Template: Story<IInput> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  placeholder: "Placeholder",
  prefix: <EyeClose />,
  suffix: "$",
};

export const TextInputWithSubtext = Template.bind({});
TextInputWithSubtext.args = {
  type: "text",
  placeholder: "Placeholder",
  subText: "Lodre main maerket description",
};
