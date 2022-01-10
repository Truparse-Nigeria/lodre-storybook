import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

export const StyledCheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0 5px;
  font: inherit;
  color: ${PALETTE.dark};
  width: 1.15em;
  height: 1.15em;
  border: 2px solid ${PALETTE.dark};
  border-radius: 0.2em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${PALETTE.primary};
    border-radius: 0.1rem;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export default StyledCheckbox;
