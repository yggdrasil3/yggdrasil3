import React from "react";
import { Hexagon } from "./hexagon";

export const SubjectIcon = (props) => {
    return (
        <div style={{
            padding: "16px 0",
            position: "relative",
            width: "186px"
        }}>
            <Hexagon width="186" color="white" shadow={`drop-shadow(0px 16px 0px ${props.color})`} />
            <div width="186px" style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -55%)",
                textAlign: "center",
                height: "93px",
            }}>
                <span style={{
                    fontWeight: "800",
                    fontSize: "24px"
                }}>{props.subjectCode}</span>
                <br/>
                <div style={{
                    height: "64px",
                    overflowY: "hidden",
                }}>
                    <span style={{
                        color: "#636363",
                        fontSize: "10px",
                    }}>{props.subjectName}</span>
                </div>
            </div>
        </div>
    )
}