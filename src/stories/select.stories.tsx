import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Flex, Paragraph, Radio, Select, SmallText } from "../components";
import { SelectProps } from "../components/select";

export default {
  title: "Components/Form/Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const PrimarySelect = Template.bind({});
PrimarySelect.args = {
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
  children: (
    <div>
      <Paragraph weight="w600">Color</Paragraph>
      <Flex className="mt-20">
        <Radio name="color" forColor hexColor="#000000" />
        <Radio name="color" forColor hexColor="#F2F2F2" />
      </Flex>
    </div>
  ),
};
