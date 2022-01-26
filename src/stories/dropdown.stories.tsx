import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  Flex,
  Paragraph,
  Radio,
  Dropdown,
  SmallText,
  Button,
  Grid,
} from "../components";
import { DropdownProps } from "../components/dropdown";
import { User } from "../icons";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const PrimaryDropdown = Template.bind({});
PrimaryDropdown.args = {
  border: true,
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

export const NoBorderDropdown = Template.bind({});
NoBorderDropdown.args = {
  border: true,
  buttonChildren: (
    <Flex alignItems="center">
      <User width={24} height={24} />
      <Paragraph weight="w500">My Account</Paragraph>
    </Flex>
  ),
  children: (
    <div>
      <Grid>
        <Button>Login</Button>
        <Button variant="outline">Register</Button>
      </Grid>
    </div>
  ),
};
