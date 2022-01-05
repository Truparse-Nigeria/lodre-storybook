import React, { useState } from "react";
import StyledCheckbox, {
  StyledCheckboxContainer,
  StyledCheckIcon,
  StyledHiddenCheckbox,
  StyledLabel,
} from "./styled";

export interface CheckboxProps {
  label: string;
}

const Checkbox = ({
  label,
}: CheckboxProps & React.InputHTMLAttributes<CheckboxProps>) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label>
      <StyledCheckboxContainer>
        <StyledHiddenCheckbox
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <StyledCheckbox checked={checked}>
          <StyledCheckIcon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </StyledCheckIcon>
        </StyledCheckbox>
        <StyledLabel>{label}</StyledLabel>
      </StyledCheckboxContainer>
    </label>
  );
};

export default Checkbox;
