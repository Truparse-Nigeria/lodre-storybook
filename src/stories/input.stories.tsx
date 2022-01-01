import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Input, { IInput, SearchInput } from "../components/input";
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
};

export const TextInputWithSubtext = Template.bind({});
TextInputWithSubtext.args = {
  type: "text",
  placeholder: "Placeholder",
  subText: "Lodre main maerket description",
};

export const TextInputWithSuffix = Template.bind({});
TextInputWithSuffix.args = {
  type: "text",
  placeholder: "Placeholder",
  trailing: "$",
};

export const TextInputWithPrefix = Template.bind({});
TextInputWithPrefix.args = {
  type: "text",
  placeholder: "Placeholder",
  leading: <EyeClose />
};


export const search = (args) => <SearchInput {...args} />