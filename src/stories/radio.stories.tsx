import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import StyledRadioButton, {
  StyledHiddenRadio,
  StyledRadioLabel,
  StyledRadioText,
} from "../components/radio/styled";
import Radio, { RadioProps } from "../components/radio";

export default {
  title: "Components/Form/Radio",
  component: StyledRadioButton,
} as Meta;

const Template: Story<RadioProps> = (args) => (
  <StyledRadioLabel>
    <StyledHiddenRadio
      value="laptops"
      onChange={(e) => console.log(e.target.checked)}
    />
    <StyledRadioText>Laptops</StyledRadioText>
  </StyledRadioLabel>
);

export const PrimaryRadio = Template.bind({});
PrimaryRadio.args = {};
