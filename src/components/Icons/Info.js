import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 10 10"
      fill={"#333"}
    >
      <path
        d="M5 0a5 5 0 100 10A5 5 0 005 0zm1.152 7.662H3.93a.417.417 0 110-.833h.556a.139.139 0 00.138-.139V4.468a.139.139 0 00-.138-.14H3.93a.417.417 0 110-.832h.556a.973.973 0 01.972.972V6.69a.139.139 0 00.139.139h.555a.417.417 0 110 .833zm-1.11-6.25a.694.694 0 110 1.389.694.694 0 010-1.389z"
        fill={props.fill || "#333"}
      />
    </svg>
  );
}

export default SvgComponent;
