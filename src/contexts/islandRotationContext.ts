import React, { Dispatch, SetStateAction, createContext } from "react";

export interface IslandRotaionConext {
  currentStage: number | null;
  isRotating: boolean;
  setIsRotating: Dispatch<SetStateAction<boolean>>;
  setCurrentStage: Dispatch<SetStateAction<number | null>>;
}

export const islandRotationContext: React.Context<IslandRotaionConext> =
  createContext({
    currentStage: null,
    isRotating: false,
  } as IslandRotaionConext);
