import * as React from "react";
import { SVGProps } from "react";

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h14v2H0V0Z" fill="#191919" />
  </svg>
);

export default SvgMinus;
