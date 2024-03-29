import * as React from "react";
import { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 3.332h15v1.667h-15V3.332Zm0 5.833h10v1.667h-10V9.165ZM2.5 15h15v1.666h-15V15Z"
      fill="#191919"
    />
  </svg>
);
export default SvgMenu;
