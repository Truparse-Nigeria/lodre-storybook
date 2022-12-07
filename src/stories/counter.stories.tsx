import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Counter from "../components/counter";

export default {
  title: "Components/Form/Counter",
  component: Counter,
} as Meta;

const Template: Story = ({
  ...args
}: any | React.InputHTMLAttributes<InputEvent>) => <Counter {...args} />;

export const PrimaryCounter = Template.bind({});
PrimaryCounter.args = {
  initialValue: 0,
  handleChange: (count: number) => console.log(count),
  maxValue: 20,
};
