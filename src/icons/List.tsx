import * as React from "react";
import { SVGProps } from "react";

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="List_svg__a" fill="#fff">
      <rect width={8} height={8} rx={1} />
    </mask>
    <rect
      width={8}
      height={8}
      rx={1}
      fill="#fff"
      stroke="#191919"
      strokeWidth={3}
      mask="url(#List_svg__a)"
    />
    <mask id="List_svg__b" fill="#fff">
      <rect y={10} width={8} height={8} rx={1} />
    </mask>
    <rect
      y={10}
      width={8}
      height={8}
      rx={1}
      fill="#fff"
      stroke="#191919"
      strokeWidth={3}
      mask="url(#List_svg__b)"
    />
    <path
      stroke="#191919"
      strokeWidth={1.5}
      d="M10 2.25h7M10 12.25h7M10 5.25h7M10 15.25h7"
    />
  </svg>
);

export default SvgList;
