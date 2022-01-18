import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  Card,
  CardBody,
  Col,
  Container,
  Flex,
  MerchantNavbar,
  Paragraph,
} from "../components";
import SvgEyeClose from "../icons/EyeClose";
import SvgCart from "../icons/Cart";
import SvgHelp from "../icons/Help";
import SvgUser from "../icons/User";

export default {
  title: "Layout/Merchant Navbar",
  component: MerchantNavbar,
} as Meta;

const Template: Story = (args) => (
  <MerchantNavbar {...args}>
    <Container className="my-30">
      <Card bgColor="grey">
        <CardBody>Basic Card</CardBody>
      </Card>
    </Container>
  </MerchantNavbar>
);

export const Main = Template.bind({});

const Nav = () => (
  <Flex gap={2}>
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
      <Flex gap={0.5} alignItems="center">
        <Col>
          <SvgUser width="20" height="20" />
        </Col>
        <Col>
          <Paragraph weight="w600">My Account</Paragraph>
        </Col>
      </Flex>
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
  logo: <SvgEyeClose />,
  nav: <Nav />,
};
