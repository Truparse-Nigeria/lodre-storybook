import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Radio, { RadioControlProps } from "../components/radio";

export default {
  title: "Components/Form/Radio",
  component: Radio,
} as Meta;

const Template: Story = ({
  ...args
}: RadioControlProps | React.InputHTMLAttributes<InputEvent>) => (
  <label>
    <Radio {...args} />
  </label>
);

export const PrimaryRadio = Template.bind({});
PrimaryRadio.args = {
  label: "Hello World!",
  onChange: (e) => console.log(e.target.checked),
};
