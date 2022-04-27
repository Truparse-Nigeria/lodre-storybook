import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Flex, Modal } from "../components";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal trigger={open} close={(trigger: boolean) => setOpen(trigger)}>
        <Flex alignItems="center" justifyContent="space-between">
          <h1>Modal</h1>
          <Button>Hello Modal</Button>
        </Flex>
      </Modal>
    </>
  );
};

export const NormalModal = Template.bind({});
NormalModal.args = {};
