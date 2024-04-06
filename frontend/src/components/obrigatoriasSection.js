import React, { useState } from "react";
import { Title } from "../atomic/title";
import { ObrigatoriasSemestre } from "./obrigatoriaSemestre";
import data from '../util/subjects.json';

export const ObrigatoriasSection = () => {
    const semestersData = data.mandatory;
    const [expand, setExpand] = useState(true);

    return (
        <div style={{
            backgroundColor: "#E7E7E7",
            padding: "8px 8px 16px 8px",
            margin: expand ? "" : "0 0 32px 0",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddign: "16px",
            }}>
                <Title color="black" fontSize="24px" title="Obrigatórias" />
                <span onClick={() => {
                    expand ? setExpand(false) : setExpand(true);
                }} style={{
                    fontSize: "36px",
                    transform: expand ? "rotate(0deg)" : "rotate(180deg)"
                    }} class="material-symbols-outlined">expand_more</span>
            </div>
            <div style={{
                display: expand ? "" : "none",
            }}>
                {semestersData.map((semester, index) => (
                    <ObrigatoriasSemestre key={index + 1} semester={index + 1} data={semester} />
                ))}
            </div>
        </div>
    );
};
