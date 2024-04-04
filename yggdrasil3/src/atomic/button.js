import React from "react";

export const Button = (props) => {
    return (
        <div style={{
            filter: 'drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)',
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70vw",
                boxShadow: `0 4px 0 ${props.textColor}`,
                color: props.textColor,
                backgroundColor: props.buttonColor,
                padding: "8px 32px",
                margin: "8px 0",
            }}>
                <span style={{fontSize: "32px"}} class="material-symbols-outlined">{props.icon}</span>
                <span>{props.text}</span>
            </div>
        </div>
    )
}