import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import StarRating from "../components/star-rating";

export default {
  title: "Components/Review/StarRating",
  component: StarRating,
} as Meta;

const Template: Story = ({ ...args }) => <StarRating {...args} />;

export const PrimaryRating = Template.bind({});
PrimaryRating.args = {
  count: 5,
  size: 30,
  edit: true,
  onChange: (rating) => {},
};

export const FilledRating = Template.bind({});
FilledRating.args = {
  count: 5,
  size: 30,
  value: 3.5,
  edit: false,
  onChange: (rating) => {},
};
