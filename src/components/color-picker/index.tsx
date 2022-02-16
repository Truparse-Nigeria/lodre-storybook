import React from "react";
import { Flex } from "..";
import { StyledColorPicker } from "./styled";

const ColorPicker = ({ ...props }) => {
  return (
    <Flex alignItems="center">
      <StyledColorPicker {...props} />
    </Flex>
  );
};

export default ColorPicker;
