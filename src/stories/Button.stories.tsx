import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { IButton } from "../components/button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Block = Template.bind({});
Block.args = {
  children: "Primary Button",
  fluid: false,
  outline: "block",
  iconOnly: false,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline Button",
  variant: "outline",
};


export const Usage = Template.bind({});
Usage.args = {
  children: "Outline Button",
  usage: "dark",
};