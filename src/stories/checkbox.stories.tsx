import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import StyledCheckbox, {
  StyledCheckboxContainer,
  StyledCheckboxText,
} from "../components/checkbox/styled";

export default {
  title: "Components/Form/Checkbox",
  component: StyledCheckbox,
} as Meta;

const Template: Story = (args) => (
  <StyledCheckboxContainer>
    <StyledCheckbox />
    <StyledCheckboxText>Laptop</StyledCheckboxText>
  </StyledCheckboxContainer>
);

export const PrimaryCheckbox = Template.bind({});
PrimaryCheckbox.args = {};
