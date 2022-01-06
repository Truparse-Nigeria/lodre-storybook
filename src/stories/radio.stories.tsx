import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  StyledRadio,
  StyledRadioContainer,
  StyledRadioText,
} from "../components/radio/styled";

export default {
  title: "Components/Form/Radio",
  component: StyledRadio,
} as Meta;

const Template: Story = () => (
  <StyledRadioContainer>
    <StyledRadio />
    <StyledRadioText>Hello</StyledRadioText>
  </StyledRadioContainer>
);

export const PrimaryRadio = Template.bind({});
PrimaryRadio.args = {};
