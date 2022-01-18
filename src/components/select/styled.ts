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
      transform: ${(props) =>
        props.focused ? "rotateZ(180deg)" : "rotateZ(0deg)"};
      transition: all ease-in-out 0.2s;
    }
  }

  .dropdown {
    position: absolute;
    top: 60px;
    left: 0px;
    visibility: ${(props) => (props.focused ? "visible" : "hidden")};
    pointer-events: ${(props) => (props.focused ? "auto" : "none")};
  }
`;
