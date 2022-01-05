import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import StyledRadioButton from "../components/radio/styled";
import Radio, { RadioProps } from "../components/radio";

export default {
  title: "Components/Form/Radio",
  component: StyledRadioButton,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const PrimaryRadio = Template.bind({});
PrimaryRadio.args = {
  label: "Hello World!",
};
