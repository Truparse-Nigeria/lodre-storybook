import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { VIEWPORT } from "../../tokens/sizes";

interface StepsProps {
  isLast: boolean;
}

interface StepProps {
  done: boolean;
}

export const StyledStepContainer = styled.div<StepsProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${VIEWPORT.sm}px) {
    flex-direction: column;
    text-align: center;
  }

  .number {
    width: 100% !important;
    text-align: center;
    margin: 0 auto;
  }

  .text {
    width: 100% !important;
    margin-left: 10px;
  }
`;

export const StyledStep = styled.div<StepProps>`
  width: 50px;
  height: 50px;
  background: ${(props) =>
    props.done ? PALETTE["primary"] : PALETTE["light"]};
  border: 1px solid ${PALETTE["primary"]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledStepLine = styled.div<StepsProps>`
  margin: auto 10px;
  height: 2px;
  width: 100%;
  background: ${PALETTE["grey"]};

  @media (max-width: ${VIEWPORT["sm"]}px) {
    display: none;
  }

  display: ${(props) => (props.isLast ? "none" : "initial")};
`;
