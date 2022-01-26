import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface DropdownProps {
  focused: boolean;
  border?: boolean;
}

export const StyledDropdown = styled.div<DropdownProps>`
  position: relative;

  .button {
    justify-content: space-between;
    padding: 20px 20px;
    text-align: left !important;
    width: 100%;
    border: ${(props) =>
      props.border ? `1.5px solid ${PALETTE.border}` : "none"} !important;

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
    z-index: 99;
    visibility: ${(props) => (props.focused ? "visible" : "hidden")};
    pointer-events: ${(props) => (props.focused ? "auto" : "none")};

    &.up {
      top: -140px;
    }

    &.down {
      top: 60px;
    }
  }
`;
