import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ProfilePicture } from "../components";
import { StyledProfilePictureProps } from "../components/profile-picture/styled";
import { ProfilePictureProps } from "../components/profile-picture";

export default {
  title: "Components/Profile/Picture",
  component: ProfilePicture,
} as Meta;

const Template: Story<StyledProfilePictureProps & ProfilePictureProps> = ({
  ...args
}) => <ProfilePicture {...args} />;

export const ActiveProfilePicture = Template.bind({});
ActiveProfilePicture.args = {
  source:
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  state: "primary",
  size: 70,
};

export const InactiveProfilePicture = Template.bind({});
InactiveProfilePicture.args = {
  source:
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  state: "border",
  size: 70,
};
