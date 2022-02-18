import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  CategoryContainer,
  CategoryItem,
  Flex,
  Paragraph,
} from "../components";
import { Help } from "../icons";

export default {
  title: "Components/Category Item",
  component: CategoryContainer,
} as ComponentMeta<typeof CategoryContainer>;

const Template: ComponentStory<typeof CategoryContainer> = (args) => (
  <CategoryContainer {...args} />
);

export const NormalCategory = Template.bind({});
NormalCategory.args = {
  icon: <Help width={24} height={24} />,
  children: (
    <div>
      <CategoryItem
        className="fit-content"
        title="Attire &amp; Clothing"
        children={
          <Flex className="px-10 py-10">
            <div>
              <Paragraph className="my-5" weight="w500" size="small">
                Baby Clothing
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Men's Clothing
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Women's Clothing
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                African Clothing
              </Paragraph>
            </div>
            <div>
              <Paragraph className="my-5" weight="w500" size="small">
                Baby Clothing
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Men's Clothing
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Women's Clothing
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                African Clothing
              </Paragraph>
            </div>
          </Flex>
        }
        icon={<Help />}
      />
      <CategoryItem
        title="Car Parts"
        children={
          <Flex className="px-10 py-10">
            <div>
              <Paragraph className="my-5" weight="w500" size="small">
                BMW
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Mercedes
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Lexus
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Toyota
              </Paragraph>
            </div>
            <div>
              <Paragraph className="my-5" weight="w500" size="small">
                Bentley
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Bugatti
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Lamboghini
              </Paragraph>
              <Paragraph className="my-5" weight="w500" size="small">
                Pagani
              </Paragraph>
            </div>
          </Flex>
        }
        icon={<Help />}
      />
    </div>
  ),
};
