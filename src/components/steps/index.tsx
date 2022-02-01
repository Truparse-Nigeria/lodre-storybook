import React, { FC } from "react";
import { Grid, Paragraph } from "..";
import { CheckLine } from "../../icons";
import { StyledStep, StyledStepContainer, StyledStepLine } from "./styled";

export interface Step {
  step: string;
  done: boolean;
}

export interface StepsProps {
  steps: Array<Step>;
  showLine: boolean;
}

const Steps: FC<StepsProps> = ({ steps = [], showLine = true }) => {
  return (
    <Grid
      xl={`repeat(${steps.length}, 1fr)`}
      lg={`repeat(${steps.length}, 1fr)`}
      md={`repeat(${steps.length}, 1fr)`}
      sm={`repeat(${steps.length}, 1fr)`}
    >
      {steps.map((step: Step, index: number) => (
        <StyledStepContainer isLast={index === steps.length - 1}>
          <StyledStep done={step.done}>
            {step.done ? (
              <CheckLine width={24} height={24} />
            ) : (
              <Paragraph className="number" weight="w500">
                {index + 1}
              </Paragraph>
            )}
          </StyledStep>
          <Paragraph className="text" weight="w500">
            {step.step}
          </Paragraph>
          {showLine && <StyledStepLine isLast={index === steps.length - 1} />}
        </StyledStepContainer>
      ))}
    </Grid>
  );
};

export default Steps;
