import React, { FC, useEffect, useState } from "react";
import { Button, Card, Paragraph } from "..";
import { ArrowDown } from "../../icons";
import { PaletteType } from "../../tokens/color";
import {
  StyledOptions,
  StyledOptionsContainer,
  StyledSelectField,
} from "./styled";

type Options = {
  value: string;
  text: string;
};

interface SelectFieldProps {
  options: Options[];
  placeholder?: string;
  borderRadius?: string;
  handleChange: Function;
  background?: PaletteType;
  defaultValue?: string;
  height?: number;
}

const SelectField: FC<SelectFieldProps> = ({
  options,
  borderRadius = "10px",
  placeholder = "Select option",
  background = "grey",
  handleChange,
  defaultValue = "",
  height,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>(
    defaultValue !== "" ? defaultValue : placeholder
  );
  const [atEnd, setAtEnd] = useState<boolean>(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () => {
  //       const body = window.innerHeight;
  //       const dropdown = (document.getElementById("dropdown") as HTMLElement)
  //         .scrollHeight;
  //       if (body - dropdown === 0) {
  //         setAtEnd(true);
  //       } else {
  //         setAtEnd(false);
  //       }
  //     });
  //   }
  //   return window.removeEventListener("scroll", () => {});
  // }, []);

  return (
    <StyledSelectField
      background={background}
      borderRadius={borderRadius}
      focused={focused}
    >
      <Button
        className="button"
        type="button"
        onClick={() => setFocused(!focused)}
      >
        {options.filter((e) => value === e.value)[0]?.text || placeholder}
        <ArrowDown className="icon" />
      </Button>
      <StyledOptionsContainer
        height={height}
        background="light"
        focused={focused}
      >
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
      </StyledOptionsContainer>
    </StyledSelectField>
  );
};

export default SelectField;
