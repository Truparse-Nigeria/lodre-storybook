import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ColorPicker } from "../components";

export default {
  title: "Components/Form/Color Picker",
  component: ColorPicker,
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
);

export const NormalColorPicker = Template.bind({});
NormalColorPicker.args = {
  onChange: (e) => console.log(e.target.value),
  defaultValue: "#131313",
};
