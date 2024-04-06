import React from "react";

export const Loadingbar = (props) => {
    return (
        <div style={{
            height: "36vh",
            width: "22vw",
            backgroundColor: props.color,
            boxShadow: "0 4px 6px rgb(0, 0, 0, 0.4)",
        }}></div>
    )
}