import * as React from "react";
import { SVGProps } from "react";
const SvgCheckLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="m8.301 12.347 7.192-7.193L16.6 6.261 8.3 14.559 3.321 9.58l1.107-1.106 3.873 3.873Z"
      fill="#191919"
    />
  </svg>
);
export default SvgCheckLine;
