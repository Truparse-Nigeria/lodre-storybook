import React, { FC, useCallback } from "react";
import { Paragraph } from "..";
import { PaletteType } from "../../tokens/color";
import { StyledTabTitle } from "./styled";

interface TabTitleProps {
  title: string;
  active: boolean;
  index: number;
  setTab: (index: number) => void;
  foreground?: PaletteType;
}

const TabTitle: FC<TabTitleProps> = ({
  title,
  active,
  index,
  setTab,
  foreground,
  ...props
}) => {
  const onClick = useCallback(() => {
    setTab(index);
  }, [setTab, index]);

  return (
    <StyledTabTitle
      active={active}
      onClick={onClick}
      foreground={foreground}
      {...props}
    >
      <Paragraph weight="w500">{title}</Paragraph>
    </StyledTabTitle>
  );
};

export default TabTitle;
