import React, { FC, ReactChild, useEffect, useState } from "react";
import { Button, Card, CardBody } from "..";
import { ArrowDown } from "../../icons";
import { StyledDropdown, StyledDropdownContainer } from "./styled";

export interface DropdownProps {
  buttonChildren: ReactChild | ReactChild[] | JSX.Element | JSX.Element[];
  children: ReactChild | ReactChild[] | JSX.Element | JSX.Element[];
  border?: boolean;
  width?: number;
}

const Dropdown: FC<DropdownProps> = ({
  border,
  width,
  buttonChildren,
  children,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [atEnd, setAtEnd] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const body = window.innerHeight;
        const dropdown = (document.getElementById("dropdown") as HTMLElement)
          .scrollHeight;
        if (body - dropdown === 0) {
          setAtEnd(true);
        } else {
          setAtEnd(false);
        }
      });
    }

    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <StyledDropdownContainer>
      <StyledDropdown
        width={width}
        border={border}
        focused={focus}
        id="dropdown-component"
      >
        <Button
          usage="border"
          className="button"
          onClick={() => setFocus(!focus)}
          variant="outline"
        >
          <>{buttonChildren}</>
          <ArrowDown className="icon" width={18} height={18} />
        </Button>

        <Card
          border
          id="dropdown"
          className={`dropdown mt-10 ${atEnd ? "up" : "down"}`}
          onMouseLeave={() => setFocus(false)}
        >
          <CardBody>
            <>{children}</>
          </CardBody>
        </Card>
      </StyledDropdown>
    </StyledDropdownContainer>
  );
};

export default Dropdown;
