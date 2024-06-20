import React from "react";
import { Loadingbar } from "./loadingbar";
import { CreditCount } from "./creditCount";

export const CreditBar = (props) => {
  return (
    <div
      style={{
        margin: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "fit-content",
      }}
    >
      <div style={{ marginBottom: "8px" }}>{props.creditType}</div>
      <Loadingbar color={props.color} />
      <CreditCount
        color={props.color}
        creditEarned={props.creditEarned}
        creditRequired={props.creditRequired}
      />
    </div>
  );
};
