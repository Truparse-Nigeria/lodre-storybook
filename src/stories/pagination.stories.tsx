import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pagination } from "../components";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const NormalPagination = Template.bind({});
NormalPagination.args = {
  next: () => {},
  previous: () => {},
  pages: 10,
  current: 1,
  goTo: (e: number) => {},
};
