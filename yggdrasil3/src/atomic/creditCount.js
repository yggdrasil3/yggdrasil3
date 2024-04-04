import React from "react";

export const CreditCount = (props) => {
    return (
        <div style={{
            marginTop: "8px",
        }}>
            {props.creditEarned} / <strong style={{color: props.color}}>{props.creditRequired}</strong>
        </div>
    )
}