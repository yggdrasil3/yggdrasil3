import React, { useEffect } from "react";
import { CreditBar } from "../atomic/creditBar";
import { useMandatorySubjects } from "../context/mandatoryContext";
import { useElectiveSubjects } from "../context/electiveContext";
import { useFreeSubjects } from "../context/freeContext";

export const GlobalStatus = () => {
  const { getMandatorySubjects } = useMandatorySubjects();
  const { getElectiveSubjects } = useElectiveSubjects();
  const { getFreeSubjects } = useFreeSubjects();

  useEffect(() => {
    console.log(getMandatorySubjects().length.toString());
    console.log(getMandatorySubjects());
  }, [getMandatorySubjects]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
        backgroundColor: "#F5F5F5",
        height: "40vh",
        padding: "48px 0 0 0",
      }}
    >
      <CreditBar
        creditType="Obrigatória"
        color="#0D75FD"
        creditEarned={getMandatorySubjects().length}
        creditRequired={111}
      />
      <CreditBar
        creditType="Eletiva"
        color="#00D0FF"
        creditEarned={getElectiveSubjects().length}
        creditRequired={56}
      />
      <CreditBar
        creditType="Livre"
        color="#00E1CF"
        creditEarned={getFreeSubjects().length}
        creditRequired={24}
      />
    </div>
  );
};
