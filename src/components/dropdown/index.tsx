import React, { FC, ReactChild, useEffect, useState } from "react";
import { Button, Card, CardBody } from "..";
import { ArrowDown } from "../../icons";
import { StyledDropdown } from "./styled";

export interface DropdownProps {
  buttonChildren: ReactChild | ReactChild[] | JSX.Element | JSX.Element[];
  children: ReactChild | ReactChild[] | JSX.Element | JSX.Element[];
}

const Dropdown: FC<DropdownProps> = ({ buttonChildren, children }) => {
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
  }, []);

  return (
    <StyledDropdown focused={focus}>
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
      >
        <CardBody>
          <>{children}</>
        </CardBody>
      </Card>
    </StyledDropdown>
  );
};

export default Dropdown;
