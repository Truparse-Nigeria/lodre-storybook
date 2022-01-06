import styled from "styled-components";

export const StyledCheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0 5px;
`;

export const StyledCheckboxText = styled.small`
  margin: 0 5px;
`;

export default StyledCheckbox;
