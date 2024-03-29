import * as React from "react";
import { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#1DA1F2" />
    <path
      d="M35.763 18.813v.75c0 7.762-5.925 16.725-16.725 16.725-3.338 0-6.413-.975-9.038-2.625.45.037.938.075 1.387.075a11.9 11.9 0 0 0 7.313-2.513 5.82 5.82 0 0 1-5.475-4.088 5.45 5.45 0 0 0 1.125.113 5.26 5.26 0 0 0 1.537-.225 5.837 5.837 0 0 1-4.725-5.737v-.076c.788.45 1.688.713 2.663.75A5.889 5.889 0 0 1 11.2 17.05c0-1.088.3-2.1.788-2.963a16.726 16.726 0 0 0 12.112 6.15c-.113-.412-.15-.9-.15-1.35A5.874 5.874 0 0 1 29.837 13c1.688 0 3.226.713 4.275 1.838 1.35-.263 2.588-.75 3.75-1.425-.45 1.387-1.387 2.512-2.587 3.262 1.2-.15 2.325-.45 3.375-.938-.75 1.2-1.725 2.25-2.887 3.075Z"
      fill="#fff"
    />
  </svg>
);
export default SvgTwitter;
