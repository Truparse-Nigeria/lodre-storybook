import * as React from "react";
import { SVGProps } from "react";

const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 4.82 10.125.695l1.178 1.179-4.125 4.125 4.125 4.125-1.178 1.178L6 7.177l-4.125 4.125-1.178-1.178 4.125-4.125L.697 1.874 1.875.695 6 4.82Z"
      fill="#191919"
    />
  </svg>
);

export default SvgX;
