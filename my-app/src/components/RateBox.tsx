import React, { FC } from 'react';

interface Props {
  selected: boolean;
  activeColor: string;
  inactiveColor: string;
  size: number | string;
  num: number;
}

const BoxNum: FC<Props> = ({ selected, activeColor, inactiveColor, size, num }) => {
  return (
        <button 
        style={{
                color:'rgba(250, 250, 250)',
                backgroundColor: selected ? activeColor : inactiveColor,
                display: 'block',
                height: size,
                width: size,
              }}
        >{num}</button>
  );
};

export default BoxNum;
