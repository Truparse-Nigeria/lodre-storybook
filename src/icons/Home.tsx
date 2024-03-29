import * as React from "react";
import { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M19 19V9.799l-7-5.522-7 5.522V19h14Zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786V20ZM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0Z"
      fill="#000"
    />
  </svg>
);
export default SvgHome;
