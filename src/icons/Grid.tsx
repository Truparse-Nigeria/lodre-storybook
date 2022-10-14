import * as React from "react";
import { SVGProps } from "react";
const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <mask id="Grid_svg__a" fill="#fff">
      <rect width={8} height={8} rx={1} />
    </mask>
    <rect
      width={8}
      height={8}
      rx={1}
      fill="#fff"
      stroke="#191919"
      strokeWidth={3}
      mask="url(#Grid_svg__a)"
    />
    <mask id="Grid_svg__b" fill="#fff">
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
      mask="url(#Grid_svg__b)"
    />
    <mask id="Grid_svg__c" fill="#fff">
      <rect x={10} width={8} height={8} rx={1} />
    </mask>
    <rect
      x={10}
      width={8}
      height={8}
      rx={1}
      fill="#fff"
      stroke="#191919"
      strokeWidth={3}
      mask="url(#Grid_svg__c)"
    />
    <mask id="Grid_svg__d" fill="#fff">
      <rect x={10} y={10} width={8} height={8} rx={1} />
    </mask>
    <rect
      x={10}
      y={10}
      width={8}
      height={8}
      rx={1}
      fill="#fff"
      stroke="#191919"
      strokeWidth={3}
      mask="url(#Grid_svg__d)"
    />
  </svg>
);
export default SvgGrid;
