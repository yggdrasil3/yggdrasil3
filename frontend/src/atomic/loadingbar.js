import React from "react";

export const Loadingbar = (props) => {
  let progress = props.creditEarned / props.creditRequired;
  let progressValue = 300 * progress;

  return (
    <div
      style={{
        height: "300px",
        width: "22vw",
        boxShadow: "0 4px 6px rgb(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          height: `${progressValue}px`,
          backgroundColor: props.color,
          width: "22vw",
        }}
      ></div>
    </div>
  );
};
