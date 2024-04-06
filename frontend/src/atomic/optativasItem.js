import React from "react";
import { Hexagon } from "./hexagon";

export const OptativasItem = (props) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
        }}>
            <div style={{
                margin: "8px",
                display: "flex",
                alignItems: "center"
                }}>
                <Hexagon width={props.width} color={props.color} />
            </div>
            <span style={{
                fontSize: "16px",
                color: "white",
            }}>{props.name}</span>
        </div>
    )
}