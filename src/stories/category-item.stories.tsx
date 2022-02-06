import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CategoryItem, Flex, Paragraph } from "../components";

export default {
  title: "Components/Category Item",
  component: CategoryItem,
} as ComponentMeta<typeof CategoryItem>;

const Template: ComponentStory<typeof CategoryItem> = (args) => (
  <CategoryItem {...args} />
);

export const NormalCategoryItem = Template.bind({});
NormalCategoryItem.args = {
  title: "Attire & Clothing",
  children: (
    <Flex className="px-20 py-20">
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
  ),
};
