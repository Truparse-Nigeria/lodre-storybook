import React, { FC, ReactChild, useState } from "react";
import { Button, Card, CardBody } from "..";
import { ArrowDown } from "../../icons";
import { StyledSelectField } from "./styled";

export interface SelectProps {
  buttonChildren: ReactChild | ReactChild[] | JSX.Element | JSX.Element[];
  children: ReactChild | ReactChild[] | JSX.Element | JSX.Element[];
}

const Select: FC<SelectProps> = ({ buttonChildren, children }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <StyledSelectField focused={focus}>
      <Button
        usage="border"
        className="button"
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(!focus)}
        variant="outline"
      >
        <>{buttonChildren}</>
        <ArrowDown className="icon" width={18} height={18} />

        {focus && (
          <Card border className="dropdown mt-10">
            <CardBody>
              <>{children}</>
            </CardBody>
          </Card>
        )}
      </Button>
    </StyledSelectField>
  );
};

export default Select;
