import React, { FC, ReactElement, useEffect, useState } from "react";
import { PaletteType } from "../../tokens/color";
import { StyledFullWidthContainer, TabContainer, TabGroup } from "./styled";
import { TabProps } from "./tab";
import TabTitle from "./tab-title";

export interface TabsProps {
  children: ReactElement[];
  centered?: boolean;
  background?: PaletteType;
  foreground?: PaletteType;
  radius?: boolean;
  activeTab?: number;
}

const Tabs: FC<TabsProps> = ({
  centered,
  foreground,
  background,
  radius = false,
  children,
  activeTab,
}) => {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (activeTab) setActive(activeTab);
  }, [activeTab]);

  return (
    <TabContainer centered={centered}>
      <TabGroup
        background={background}
        foreground={foreground}
        radius={radius}
        number={children.length}
      >
        {children.map((item: ReactElement<TabProps>, index: number) => (
          <TabTitle
            key={index}
            index={index}
            title={item.props.title}
            active={active === index}
            setTab={setActive}
            foreground={foreground}
          />
        ))}
      </TabGroup>
      <StyledFullWidthContainer>{children[active]}</StyledFullWidthContainer>
    </TabContainer>
  );
};

export default Tabs;
