import React, { FC, useState } from "react";
import { Button, Card, Paragraph } from "..";
import { ArrowDown } from "../../icons";
import { PaletteType } from "../../tokens/color";
import { StyledOptions, StyledSideSelectField } from "./styled";

type Options = {
  value: string;
  text: string;
};

interface SideSelectFieldProps {
  options: Options[];
  placeholder?: string;
  borderRadius?: string;
  handleChange: Function;
  background?: PaletteType;
}

const SideSelectField: FC<SideSelectFieldProps> = ({
  options,
  borderRadius = "10px",
  placeholder = "Select option",
  background = "grey",
  handleChange,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>(placeholder);

  return (
    <StyledSideSelectField
      background={background}
      borderRadius={borderRadius}
      focused={focused}
    >
      <Button className="button" onClick={() => setFocused(!focused)}>
        {options.filter((e) => value === e.value)[0]?.text || placeholder}
        <ArrowDown className="icon" />
      </Button>
      <Card className="dropdown">
        {options.map((options: Options, index: number) => (
          <StyledOptions
            selected={value === options.value}
            onClick={() => {
              setValue(options.value);
              handleChange(options.value);
              setFocused(!focused);
            }}
            key={index}
          >
            <Paragraph size="pSmall" weight="w500">
              {options.text}
            </Paragraph>
          </StyledOptions>
        ))}
      </Card>
    </StyledSideSelectField>
  );
};

export default SideSelectField;
