import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SideSelectField } from "../components";

export default {
  title: "Components/Form/Side Select Field",
  component: SideSelectField,
} as ComponentMeta<typeof SideSelectField>;

const Template: ComponentStory<typeof SideSelectField> = (args) => (
  <SideSelectField {...args} />
);

export const NormalSideSelectField = Template.bind({});
NormalSideSelectField.args = {
  options: [
    { text: "Hello World", value: "hello-world" },
    { text: "Welcome", value: "welcome" },
  ],
  background: "grey",
  borderRadius: "10px 0px 0px 10px",
  handleChange: (e) => console.log(e),
};
