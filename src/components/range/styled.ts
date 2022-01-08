import styled from "styled-components";
import React from "react";

export const StyledRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const StyledRange = styled.input.attrs({ type: "range" })`
  margin: 5px 5px;
`;

export default StyledRange;
