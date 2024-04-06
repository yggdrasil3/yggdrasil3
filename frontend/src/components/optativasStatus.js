import React from "react";
import { OptativasTrilhas } from "./optativasTrilhas";
import { OptativasObrigatorias } from "./optativasObrigatorias";

export const OptativasStatus = () => {
    return (
        <div style={{
            backgroundColor: "#2E2E2E",
            padding: "16px 8px 32px 8px",
        }}>
            <OptativasObrigatorias />
            <OptativasTrilhas />
        </div>
    )
}