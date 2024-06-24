import React, { useState } from "react";
import { Hexagon } from "./hexagon";
import { useMandatorySubjects } from "../context/mandatoryContext";
import { useHumanidadesSubjects } from "../context/humanidadesContext";
import { useScienceSubjects } from "../context/scienceContext";
import { useStatisticsSubjects } from "../context/statisticsContext";
import { useElectiveSubjects } from "../context/electiveContext";

export const SubjectIcon = (props) => {
  const { setMandatorySubjects } = useMandatorySubjects();
  const { setElectiveSubjects } = useElectiveSubjects();

  const { setHumanidadesSubjects } = useHumanidadesSubjects();
  const { setScienceSubjects } = useScienceSubjects();
  const { setStatisticsSubjects } = useStatisticsSubjects();

  const [done, setDone] = useState(false);

  const handleClick = () => {
    if (props.type === "mandatory") {
      setMandatorySubjects(props.subjectCode);
    } else if (props.type === "human") {
      setHumanidadesSubjects(props.subjectCode);
    } else if (props.type === "science") {
      setScienceSubjects(props.subjectCode);
    } else if (props.type === "statistics") {
      setStatisticsSubjects(props.subjectCode);
    } else if (props.type === "elective") {
      setElectiveSubjects(props.subjectCode);
    }

    done ? setDone(false) : setDone(true);
  };

  return (
    <div
      style={{
        padding: "16px 0",
        position: "relative",
        width: "186px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Hexagon
        width="186"
        color="white"
        shadow={`drop-shadow(0px 16px 0px ${done ? props.color : "#F0F0F0"})`}
      />
      <div
        width="186px"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          textAlign: "center",
          height: "93px",
        }}
      >
        <span
          style={{
            fontWeight: "800",
            fontSize: "24px",
          }}
        >
          {props.subjectCode}
        </span>
        <br />
        <div
          style={{
            height: "64px",
            overflowY: "hidden",
          }}
        >
          <span
            style={{
              color: "#636363",
              fontSize: "10px",
            }}
          >
            {props.subjectName}
          </span>
        </div>
      </div>
    </div>
  );
};
