import React, { useState, useEffect } from "react";
import { Title } from "../atomic/title";
import { ObrigatoriasSemestre } from "./obrigatoriaSemestre";
import data from "../util/subjects.json";
import { SubjectIcon } from "../atomic/subjectIcon";

export const OptativasEstatisticaSection = () => {
  const semestersData = data.elective_statistics;

  return (
    <div
      style={{
        backgroundColor: "#E7E7E7",
        padding: "8px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddign: "16px",
        }}
      >
        <Title color="black" fontSize="24px" title="Estatistica" />
        <span
          style={{
            fontSize: "36px",
            padding: "0 8px 0 0",
            transform: "rotate(180deg)",
          }}
          class="material-symbols-outlined"
        >
          expand_more
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {semestersData.length === 0 ? (
          <div
            style={{
              padding: "16px",
              textAlign: "center",
              width: "100vw",
              color: "#616161",
            }}
          >
            Não há obrigatorias
          </div>
        ) : (
          <></>
        )}
        {semestersData.map((subject) => (
          <SubjectIcon
            key={subject.code}
            color="#00A3FF"
            type="statistics"
            subjectCode={subject.code}
            subjectName={subject.name}
          />
        ))}
      </div>
    </div>
  );
};
