import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Paragraph, Select, SmallText } from "../components";
import { SelectProps } from "../components/select";

export default {
  title: "Components/Form/Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const TextSelect = Template.bind({});
TextSelect.args = {
  buttonChildren: (
    <div>
      <div>
        <SmallText weight="w400">
          <b>Color:</b> Purple
        </SmallText>
      </div>
      <div>
        <SmallText weight="w400">
          <b>Size:</b> Large
        </SmallText>
      </div>
    </div>
  ),
  children: <Paragraph>Hello</Paragraph>,
};
