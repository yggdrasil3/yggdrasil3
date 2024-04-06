import React, { useState } from "react";
import { globals } from "../globals";

export const Title = (props) => {
    return (
        <div style={{
            padding: "0 0 16px 8px",
            margin: "8px 0 0 0",
        }}>
            <div style={{
                fontSize: props.fontSize,
                padding: "8px 16px",
                width: "fit-content",
                color: props.color,
                boxShadow: `0 4px 0 ${props.color}`,
            }}>
                {props.title}
            </div>
        </div>
        );
};
