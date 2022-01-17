import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Paragraph, Tabs } from "../components";
import { TabsProps } from "../components/tabs";
import Tab from "../components/tabs/tab";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = ({ ...args }) => (
  <Tabs {...args}>
    <Tab title="Hello">
      <Paragraph>Hello World!</Paragraph>
    </Tab>
    <Tab title="Bye">
      <Paragraph>Bye!</Paragraph>
    </Tab>
  </Tabs>
);

export const PrimaryTabs = Template.bind({});
PrimaryTabs.args = {
  centered: true,
  radius: false,
};

export const ComplexTabs = Template.bind({});
ComplexTabs.args = {
  centered: false,
  background: "light",
  foreground: "dark",
  radius: true,
};
