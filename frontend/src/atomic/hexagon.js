import React from 'react';

export const Hexagon = (props) => {
  const radius = props.width / 2;

  const points = Array.from({ length: 6 }).map((_, index) => {
    const angle = ((index * 60 * Math.PI) / 180) - Math.PI / 6;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return `${x},${y}`;
  });

  const viewBox = `-${radius} -${radius} ${2 * radius} ${2 * radius}`;

  return (
    <svg
        style={{...props.style, filter: props.shadow}}
        width={2 * radius} height={2 * radius} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      <polygon points={points.join(' ')} fill={props.color}/>
    </svg>
  );
};