import React, { FC, useState } from "react";
import { Flex, SmallText } from "..";
import { CaretLeft, CaretRight } from "../../icons";
import { StyledPageButton, StyledPageNumber } from "./styled";

interface PaginationProps {
  next: Function;
  previous: Function;
  pages: number;
  current: number;
  goTo: Function;
}

const Pagination: FC<PaginationProps> = ({
  next,
  previous,
  pages,
  current,
  goTo,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(current);
  return (
    <Flex alignItems="center" gap={1}>
      <StyledPageButton
        disabled={currentPage === 1}
        onClick={() => {
          previous();
          setCurrentPage(currentPage - 1);
        }}
      >
        <CaretLeft width={24} height={24} />
      </StyledPageButton>
      <Flex alignItems="center" gap={1}>
        {Array(pages)
          .fill("")
          .map((page: any, index: number) => (
            <StyledPageNumber
              onClick={() => {
                goTo(index + 1);
                setCurrentPage(index + 1);
              }}
              selected={index + 1 === currentPage}
              key={index}
            >
              <SmallText weight="w500">{index + 1}</SmallText>
            </StyledPageNumber>
          ))}
      </Flex>
      <StyledPageButton
        disabled={currentPage === pages}
        onClick={() => {
          setCurrentPage(currentPage + 1);
          next();
        }}
      >
        <CaretRight width={24} height={24} />
      </StyledPageButton>
    </Flex>
  );
};

export default Pagination;
