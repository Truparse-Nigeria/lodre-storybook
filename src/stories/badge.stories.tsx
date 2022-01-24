import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Badge, Grid, SmallText } from "../components/";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Grid lg="50px">
    <Badge {...args} />
  </Grid>
);

export const NormalBadge = Template.bind({});
NormalBadge.args = {
  borderColor: "primary",
  fillColor: "light",
  color: "dark",
  children: <SmallText weight="w500">10%</SmallText>,
};

export const AlternateBadge = Template.bind({});
AlternateBadge.args = {
  borderColor: "primary",
  fillColor: "primary",
  color: "dark",
  children: <SmallText weight="w500">10%</SmallText>,
};
