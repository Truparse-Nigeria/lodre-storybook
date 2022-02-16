import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DimissableImage } from "../components";

export default {
  title: "Components/Dismissable Image",
  component: DimissableImage,
} as ComponentMeta<typeof DimissableImage>;

const Template: ComponentStory<typeof DimissableImage> = (args) => (
  <DimissableImage {...args} />
);

export const NormalDimissableImage = Template.bind({});
NormalDimissableImage.args = {
  src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  id: "1234",
  dismissable: true,
  removeImage: (id: string) => console.log(id),
};
