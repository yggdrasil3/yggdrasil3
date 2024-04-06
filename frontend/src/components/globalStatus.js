import React from "react";
import { CreditBar } from "../atomic/creditBar";

export const GlobalStatus = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100vw",
            backgroundColor: "#F5F5F5",
            height: "40vh",
            padding: "48px 0 0 0"
        }}>
            <CreditBar creditType="Obrigatória" color="#0D75FD" creditEarned="111" creditRequired="111" />
            <CreditBar creditType="Eletiva" color="#00D0FF" creditEarned="56" creditRequired="56" />
            <CreditBar creditType="Livre" color="#00E1CF" creditEarned="24" creditRequired="24" />
        </div>
    )
}