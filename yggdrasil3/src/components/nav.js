import React, { useState } from "react";
import { ItemNav } from "../atomic/itemNav";

export const Nav = () => {
    const [dashboard, setDashbaord] = useState(true);
    const [obrigatorias, setObrigatorias] = useState(false);
    const [optativas, setOptativas] = useState(false);
    const [trilhas, setTrilhas] = useState(false);

    const handleDashboard = () => {
        setDashbaord(true);
        setObrigatorias(false);
        setOptativas(false);
        setTrilhas(false);
    }

    const handleObrigatorias = () => {
        setDashbaord(false);
        setObrigatorias(true);
        setOptativas(false);
        setTrilhas(false);
    }

    const handleOptativas = () => {
        setDashbaord(false);
        setObrigatorias(false);
        setOptativas(true);
        setTrilhas(false);
    }

    const handleTrilhas = () => {
        setDashbaord(false);
        setObrigatorias(false);
        setOptativas(false);
        setTrilhas(true);
    }

    return (
        <div style={{
            position: "fixed",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: "8px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "16px",
            backgroundColor: "white",
            zIndex: 1000,
            overflowX: "auto",
            width: "100vw"
        }}>
            <ItemNav active={dashboard} onClick={handleDashboard} section="Dashboard" />
            <ItemNav active={obrigatorias} onClick={handleObrigatorias} section="Obrigatórias" />
            <ItemNav active={optativas} onClick={handleOptativas} section="Optativas" />
            <ItemNav style={{margin: "0 16px 0 0"}} active={trilhas} onClick={handleTrilhas} section="Trilhas" />
        </div>
    )
}