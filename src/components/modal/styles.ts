import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface ModalBody {
  width?: number;
}

const StyledModal = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 1em;
  z-index: 999999;
  box-sizing: border-box;
  backdrop-filter: blur(8px);

  .modal_fade_in {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    display: initial;
  }
  .modal_fade_out {
    opacity: 0;
    transition: all 0.3s ease-in-out;
    display: none;
  }
`;

const StyledModalClose = styled.button`
  position: fixed;
  top: 2.5%;
  right: 1.5%;
  background: transparent;
  border: none !important;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    path {
      fill: ${PALETTE.light};
    }
  }
`;

const StyledModalBody = styled.div<ModalBody>`
  max-width: 95%;
  width: ${(props) => (props.width ? props.width : 450)}px;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
`;

export { StyledModal, StyledModalBody, StyledModalClose };
