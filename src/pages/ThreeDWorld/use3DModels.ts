import { Dispatch, SetStateAction, useState } from "react";

export type XYZParams = [number, number, number];

interface Use3DModelsReturn {
  islandScale: XYZParams;
  islandPosition: XYZParams;
  islandRotation: XYZParams;
  planeScale: XYZParams;
  planePosition: XYZParams;
  isRotating: boolean;
  currentStage: number | null;
  setIsRotating: Dispatch<SetStateAction<boolean>>;
  setCurrentStage: Dispatch<SetStateAction<number | null>>;
}

export const use3DModels = (): Use3DModelsReturn => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  const adjustIslandForScreenSize = (): XYZParams[] => {
    let screenScale: XYZParams = [] as unknown as XYZParams;
    const screenPosition: XYZParams = [0, -6.5, -43];
    const rotation: XYZParams = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation]: XYZParams[] =
    adjustIslandForScreenSize();

  const adjustPlaneForScreenSize = (): XYZParams[] => {
    let screenScale: XYZParams;
    let screenPosition: XYZParams;

    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return {
    islandScale,
    islandPosition,
    islandRotation,
    planeScale,
    planePosition,
    isRotating,
    currentStage,
    setIsRotating,
    setCurrentStage,
  };
};
