import React, { FC, ReactElement, useState } from "react";
import { TabContainer, TabGroup } from "./styled";
import Tab, { TabProps } from "./tab";
import TabTitle from "./tab-title";

export interface TabsProps {
  children: ReactElement[];
  centered?: boolean;
}

const Tabs: FC<TabsProps> = ({ centered, children }) => {
  const [active, setActive] = useState<number>(0);

  return (
    <TabContainer centered={centered}>
      <TabGroup>
        {children.map((item: ReactElement<TabProps>, index: number) => (
          <TabTitle
            key={index}
            index={index}
            title={item.props.title}
            active={active === index}
            setTab={setActive}
          />
        ))}
      </TabGroup>
      <div>{children[active]}</div>
    </TabContainer>
  );
};

export default Tabs;
