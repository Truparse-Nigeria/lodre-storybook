import React, { FC, ReactElement, useState } from "react";
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
}

const Tabs: FC<TabsProps> = ({
  centered,
  foreground,
  background,
  radius,
  children,
}) => {
  const [active, setActive] = useState<number>(0);

  return (
    <TabContainer centered={centered}>
      <TabGroup background={background} foreground={foreground} radius={radius}>
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
