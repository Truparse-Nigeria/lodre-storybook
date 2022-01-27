import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Steps } from "../components";

export default {
  title: "Components/Steps",
  component: Steps,
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />;

export const NormalSteps = Template.bind({});
NormalSteps.args = {
  steps: [
    { step: "Create Account", done: true },
    { step: "Verify Account", done: true },
    { step: "Step Up Product", done: false },
  ],
};
