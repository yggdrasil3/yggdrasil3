import React from "react";
import { SubjectIcon } from "../atomic/subjectIcon";

export const ObrigatoriasSemestre = (props) => {
  return (
    <div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#616161",
          margin: "24px 0 8px 8px",
        }}
      >
        {props.semester}º Semestre (0 /{" "}
        <strong style={{ color: "#0d75fd" }}>{props.data.length}</strong>)
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {props.data.length === 0 ? (
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
        {props.data.map((subject) => (
          <SubjectIcon
            key={subject.code}
            color="#0d75fd"
            type="mandatory"
            subjectCode={subject.code}
            subjectName={subject.name}
          />
        ))}
      </div>
    </div>
  );
};
