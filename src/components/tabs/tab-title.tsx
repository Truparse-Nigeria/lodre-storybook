import React, { FC, useCallback } from "react";
import { Paragraph } from "..";
import { StyledTabTitle } from "./styled";

interface TabTitleProps {
  title: string;
  active: boolean;
  index: number;
  setTab: (index: number) => void;
}

const TabTitle: FC<TabTitleProps> = ({
  title,
  active,
  index,
  setTab,
  ...props
}) => {
  const onClick = useCallback(() => {
    setTab(index);
  }, [setTab, index]);

  return (
    <StyledTabTitle active={active} onClick={onClick} {...props}>
      <Paragraph weight="w500">{title}</Paragraph>
    </StyledTabTitle>
  );
};

export default TabTitle;
