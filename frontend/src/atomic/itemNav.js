import React, { useState } from "react";
import { globals } from "../globals";

export const ItemNav = (props) => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    }

    const activeNav = () => {
        return (
            <div onClick={handleClick} style={{
                fontSize: globals.defaultFont,
                padding: "8px 16px",
                width: "fit-content",
                boxShadow: props.active ? "0 4px 0 #000000" : "none",
            }}>
                <a style={{
                    textDecoration: "none",
                    color: "black",
                }} href={`#${props.section}`}>
                    {props.section}
                </a>
            </div>
        );
    };

    return (
        activeNav()
    );
};
