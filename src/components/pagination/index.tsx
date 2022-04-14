import React, { FC, useEffect, useState } from "react";
import { Flex, SmallText } from "..";
import { CaretLeft, CaretRight } from "../../icons";
import { StyledPageButton, StyledPageNumber } from "./styled";

interface PaginationProps {
  pages: number;
  current: number;
  goTo: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ pages, current, goTo }) => {
  const [currentPage, setCurrentPage] = useState<number>(current);

  useEffect(() => {
    setCurrentPage(current);
  }, [current]);

  return (
    <Flex alignItems="center" gap={1}>
      <StyledPageButton
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1);
          goTo(currentPage - 1);
        }}
      >
        <CaretLeft width={24} height={24} />
      </StyledPageButton>
      <Flex alignItems="center" gap={1}>
        {pages >= 5 ? (
          <SmallText weight="w600">
            Page <>{currentPage}</> of {pages}
          </SmallText>
        ) : (
          Array(pages)
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
            ))
        )}
      </Flex>
      <StyledPageButton
        disabled={currentPage === pages}
        onClick={() => {
          goTo(currentPage + 1);
          setCurrentPage(currentPage + 1);
        }}
      >
        <CaretRight width={24} height={24} />
      </StyledPageButton>
    </Flex>
  );
};

export default Pagination;
