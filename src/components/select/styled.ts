import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface SelectFieldProps {
  focused: boolean;
}

export const StyledSelectField = styled.div<SelectFieldProps>`
  position: relative;

  .button {
    justify-content: space-between;
    padding: 30px 20px;
    text-align: left !important;
    width: 100%;
    border: 1.5px solid ${PALETTE.border} !important;

    .icon {
      justify-self: flex-end;
      margin-left: 25px;
    }
  }

  .dropdown {
    position: absolute;
    top: 60px;
    left: 0px;
  }
`;
