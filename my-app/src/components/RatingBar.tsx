import './RatingBar.css'
import React, { FC } from "react";
import BoxNum from "./RateBox";
import { COLORS } from "./colors";

export interface Props {
  maxNum?: number;
  value?: number;
  onChange?: (newStar: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  size?: number | string;
  gap?: number | string;
  editable?: boolean;
  hideInactive?: boolean;
}

const RateBox: FC<Props> = ({
  maxNum: maxNums = 10,
  value = 0,
  onChange,
  activeColor = COLORS.active,
  inactiveColor = COLORS.inactive,
  size = 36,
  editable = true,
  gap = 16,
  hideInactive = false
}) => (
  <div className="wrapper">
    <p>{value}</p>
    <ul
      style={{
        color: inactiveColor,
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex"
      }}
    >
      {Array(hideInactive ? value : maxNums)
        .fill(null)
        .map((_, i) => i + 1)
        .map(boxNumber => (
          <li
            title={`${boxNumber} Num`}
            key={boxNumber}
            onClick={() => {
              if (onChange && editable) onChange(boxNumber);
            }}
            style={{
              cursor: "pointer",
              position: "relative",
              marginRight: boxNumber !== maxNums ? gap : 0
            }}
          >
            <BoxNum
              selected={boxNumber <= value}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              size={size}
              num={boxNumber}
            />
          </li>
        ))}
    </ul>
  </div>
  
);

export default RateBox;
