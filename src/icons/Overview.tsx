import * as React from "react";
import { SVGProps } from "react";

const SvgOverview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 18V8h8v10h-8ZM0 10V0h8v10H0Zm6-2V2H2v6h4ZM0 18v-6h8v6H0Zm2-2h4v-2H2v2Zm10 0h4v-6h-4v6ZM10 0h8v6h-8V0Zm2 2v2h4V2h-4Z"
      fill="#000"
    />
  </svg>
);

export default SvgOverview;
