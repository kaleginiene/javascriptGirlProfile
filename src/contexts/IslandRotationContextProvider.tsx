import { ReactNode, useState } from "react";
import { islandRotationContext } from "./islandRotationContext";

interface Props {
  children: ReactNode;
}

export const IslandRotationContextProvider: React.FC<Props> = (
  props: Props
) => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  return (
    <islandRotationContext.Provider
      value={{
        isRotating,
        setIsRotating,
        currentStage,
        setCurrentStage,
      }}
    >
      {props.children}
    </islandRotationContext.Provider>
  );
};
