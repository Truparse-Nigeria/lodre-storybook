import React, { useState } from "react";
import StyledCheckbox, {
  StyledCheckboxContainer,
  StyledCheckboxLabel,
  StyledCheckboxText,
  StyledHiddenCheckbox,
} from "./styled";

export interface CheckboxProps {
  label: string;
}

const Checkbox = ({
  label,
}: CheckboxProps & React.InputHTMLAttributes<CheckboxProps>) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <StyledCheckboxLabel>
      <StyledHiddenCheckbox
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <StyledCheckboxText>{label}</StyledCheckboxText>
    </StyledCheckboxLabel>
  );
};

export default Checkbox;
