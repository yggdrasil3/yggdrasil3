import React from "react";
import { OptativasItem } from "../atomic/optativasItem";
import { Title } from "../atomic/title";

export const OptativasTrilhas = () => {
    return (
        <div>
            <Title color="white" fontSize="24px" title="Trilhas" />
            <div>
                <OptativasItem name="Sistema de Software" color="#137752" width="32" shadow='drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)' />
                <OptativasItem name="Inteligência Artificial" color="#FF00AA" width="32" shadow='drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)' />
                <OptativasItem name="Ciências de Dados" color="#FF6300" width="32" shadow='drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)' />
                <OptativasItem name="Teoria da Computação" color="#E7040F" width="32" shadow='drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25)' />
            </div>
        </div>
    )
}