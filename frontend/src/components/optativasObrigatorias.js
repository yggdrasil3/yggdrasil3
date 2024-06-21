import React from "react";
import { OptativasItem } from "../atomic/optativasItem";
import { Title } from "../atomic/title";

export const OptativasObrigatorias = () => {
  return (
    <div>
      <Title color="white" fontSize="24px" title="Optativas Obrigatórias" />
      <div>
        <OptativasItem
          name="Optativa de Humanidades"
          color="#FFD600"
          width="32"
          shadow="drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)"
        />
        <OptativasItem
          name="Optativa de Ciências"
          color="#FF00E5"
          width="32"
          shadow="drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)"
        />
        <OptativasItem
          name="Optativa de Estatística"
          color="#00A3FF"
          width="32"
          shadow="drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)"
        />
      </div>
    </div>
  );
};
