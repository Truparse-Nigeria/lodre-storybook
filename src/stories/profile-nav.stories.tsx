import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ProfileNavItem } from "../components";
import { Orders } from "../icons";

export default {
  title: "Components/Profile/Navigation Item",
  component: ProfileNavItem,
} as Meta;

const Template: Story = ({ ...args }: any) => <ProfileNavItem {...args} />;

export const ActiveProfileNavItem = Template.bind({});
ActiveProfileNavItem.args = {
  active: true,
  icon: <Orders />,
  children: <a>Hello World</a>,
};

export const InactiveProfileNavItem = Template.bind({});
InactiveProfileNavItem.args = {
  active: false,
  icon: <Orders />,
  children: <a>Hello World</a>,
};
