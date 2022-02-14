import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Radio, { RadioControlProps } from "../components/radio";

export default {
  title: "Components/Form/Radio",
  component: Radio,
} as Meta;

const Template: Story<RadioControlProps> = ({ ...args }) => (
  <label>
    <Radio {...args} />
  </label>
);

export const PrimaryRadio = Template.bind({});
PrimaryRadio.args = {
  label: "Hello World!",
  name: "primary",
  onChange: () => {},
};

export const FullWidthRadio = Template.bind({});
FullWidthRadio.args = {
  label: "Door Delivery",
  subLabel: "Delivered between Thursday 25 Nov and Monday 29 Nov for ₦ 1,750",
  name: "full_width",
  fullWidth: true,
  onChange: () => {},
};

export const ColorRadio = Template.bind({});
ColorRadio.args = {
  hexColor: "#51408C",
  forColor: true,
  fullWidth: false,
  name: "colors",
  onChange: () => {},
};

export const DismissableColorRadio = Template.bind({});
DismissableColorRadio.args = {
  hexColor: "#51408C",
  forColor: true,
  fullWidth: false,
  name: "colors",
  dismissable: true,
  callback: () => console.log("dismissed"),
  onChange: () => {},
};
