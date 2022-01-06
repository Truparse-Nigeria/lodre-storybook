import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Checkbox, { CheckboxProps } from "../components/checkbox/index";
import StyledHiddenCheckbox, {
  StyledCheckboxLabel,
  StyledCheckboxText,
} from "../components/checkbox/styled";

export default {
  title: "Components/Form/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story = (args) => (
  <StyledCheckboxLabel>
    <StyledHiddenCheckbox
      value="laptops"
      onChange={(e) => console.log(e.target.checked)}
    />
    <StyledCheckboxText>Laptops</StyledCheckboxText>
  </StyledCheckboxLabel>
);

export const PrimaryCheckbox = Template.bind({});
PrimaryCheckbox.args = {};
