import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  Button,
  Card,
  CardBody,
  Col,
  Dropdown,
  Flex,
  Grid,
  MerchantNavbar,
  Paragraph,
} from "../components";
import SvgEyeClose from "../icons/EyeClose";
import SvgCart from "../icons/Cart";
import SvgHelp from "../icons/Help";
import User from "../icons/User";

export default {
  title: "Layout/Merchant Navbar",
  component: MerchantNavbar,
} as Meta;

const Template: Story = (args) => (
  <MerchantNavbar {...args}>
    <Card className="my-20" bgColor="grey">
      <CardBody>Basic Card</CardBody>
    </Card>
  </MerchantNavbar>
);

export const Main = Template.bind({});

const Nav = () => (
  <Flex gap={2} alignItems="center">
    <Col>
      <Flex gap={0.5} alignItems="center">
        <Col>
          <SvgCart width="20" height="20" />
        </Col>
        <Col>
          <Paragraph weight="w600">Orders</Paragraph>
        </Col>
      </Flex>
    </Col>
    <Col>
      <Dropdown
        width={350}
        buttonChildren={
          <Flex alignItems="center">
            <User width={24} height={24} />
            <Paragraph weight="w500">My Account</Paragraph>
          </Flex>
        }
      >
        {" "}
        <Grid>
          <Button>Login</Button>
          <Button variant="outline">Register</Button>
        </Grid>
      </Dropdown>
    </Col>
    <Col>
      <Flex gap={0.5} alignItems="center">
        <Col>
          <SvgHelp width="20" height="20" />
        </Col>
        <Col>
          <Paragraph weight="w600">Help</Paragraph>
        </Col>
      </Flex>
    </Col>
  </Flex>
);

Main.args = {
  sideNavSize: 250,
  logo: <SvgEyeClose />,
  nav: <Nav />,
};
