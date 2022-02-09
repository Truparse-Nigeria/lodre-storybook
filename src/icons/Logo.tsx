import * as React from "react";
import { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 181.592 61"
    {...props}
  >
    <g data-name="Group 5">
      <g data-name="Group 4">
        <g data-name="Group 3">
          <g data-name="Group 2">
            <g data-name="Group 1">
              <text
                transform="translate(43.459 48)"
                fill="#2b1606"
                fontSize={49}
                fontFamily="Righteous-Regular, Righteous"
              >
                <tspan x={0} y={0}>
                  {"Lodre"}
                </tspan>
              </text>
              <path
                data-name="Path 9"
                d="m26.59 40.764 2.6 3.2a3.366 3.366 0 0 1-.486 4.721l-.2.16a16.6 16.6 0 0 1-11.854 4.986A16.706 16.706 0 0 1-.007 37.174V6.564h3.74a3.752 3.752 0 0 1 3.741 3.741v.365l.115-.076v12.514a9.122 9.122 0 0 0-.115 1.443v12.624a9.126 9.126 0 0 0 .115 1.443v.543h.1a9.211 9.211 0 0 0 8.957 7.189 9.1 9.1 0 0 0 4.744-1.33l-.017-.021Z"
                fill="#2b1606"
              />
              <path
                data-name="Path 10"
                d="M16.767 19.459a16.779 16.779 0 0 1 16.4 13.227h3.708v.015a3.753 3.753 0 0 1 3.408 3.725v3.741H9.855v-3.741a3.755 3.755 0 0 1 3.057-3.677v-.063h12.206A9.07 9.07 0 0 0 9.464 30.86v-9.731a16.7 16.7 0 0 1 7.303-1.67Z"
                fill="#f26900"
              />
              <text
                transform="translate(168.591 21.282)"
                fill="#2b1606"
                fontSize={8}
                fontFamily="FilsonPro-Medium, Filson Pro"
                fontWeight={500}
              >
                <tspan x={0} y={0}>
                  {"TM"}
                </tspan>
              </text>
              <text
                transform="translate(103.992 56.95)"
                fill="#f26900"
                fontSize={7}
                fontFamily="FilsonPro-Medium, Filson Pro"
                fontWeight={500}
              >
                <tspan x={0} y={0}>
                  {"MAINMARKET"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgLogo;
