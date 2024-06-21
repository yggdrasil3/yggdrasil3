import React from "react";
import { OptativasItem } from "../atomic/optativasItem";
import { Title } from "../atomic/title";
import { useHumanidadesSubjects } from "../context/humanidadesContext";
import { useScienceSubjects } from "../context/scienceContext";
import { useStatisticsSubjects } from "../context/statisticsContext";

export const OptativasObrigatorias = () => {
  const humanidadesColor = "#FFD600";
  const scienceColor = "#FF00E5";
  const statisticsColor = "#00A3FF";

  const { getHumanidadesSubjects } = useHumanidadesSubjects();
  const { getScienceSubjects } = useScienceSubjects();
  const { getStatisticsSubjects } = useStatisticsSubjects();

  return (
    <div>
      <Title color="white" fontSize="24px" title="Optativas Obrigatórias" />
      <div>
        <OptativasItem
          name="Optativa de Humanidades"
          color={humanidadesColor}
          width="32"
          shadow="drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)"
          active={getHumanidadesSubjects().length > 0}
        />
        <OptativasItem
          name="Optativa de Ciências"
          color={scienceColor}
          width="32"
          shadow="drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)"
          active={getScienceSubjects().length > 0}
        />
        <OptativasItem
          name="Optativa de Estatística"
          color={statisticsColor}
          width="32"
          shadow="drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)"
          active={getStatisticsSubjects().length > 0}
        />
      </div>
    </div>
  );
};
