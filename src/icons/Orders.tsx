import * as React from "react";
import { SVGProps } from "react";

const SvgOrders = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.25 15.5H2.75A2.25 2.25 0 0 1 .5 13.25v-12A.75.75 0 0 1 1.25.5h10.5a.75.75 0 0 1 .75.75v9h3v3a2.25 2.25 0 0 1-2.25 2.25Zm-.75-3.75v1.5a.75.75 0 1 0 1.5 0v-1.5h-1.5ZM11 14V2H2v11.25a.75.75 0 0 0 .75.75H11ZM3.5 4.25h6v1.5h-6v-1.5Zm0 3h6v1.5h-6v-1.5Zm0 3h3.75v1.5H3.5v-1.5Z"
      fill="#8C8C8C"
    />
  </svg>
);

export default SvgOrders;
