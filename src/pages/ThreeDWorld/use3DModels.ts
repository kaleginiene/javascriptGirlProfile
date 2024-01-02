export type XYZParams = [number, number, number];

interface Use3DModelsReturn {
  islandScale: XYZParams;
  islandPosition: XYZParams;
  islandRotation: XYZParams;
  planeScale: XYZParams;
  planePosition: XYZParams;
  planeRotation: XYZParams;
  balloonPosition: XYZParams;
  balloonRotation: XYZParams;
  balloonScale: XYZParams;
}

export const use3DModels = (): Use3DModelsReturn => {
  const adjustIslandForScreenSize = (): XYZParams[] => {
    let screenScale: XYZParams = [] as unknown as XYZParams;
    const screenPosition: XYZParams = [0, -6.5, -43];
    const rotation: XYZParams = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1.3, 1.3, 1.3];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation]: XYZParams[] =
    adjustIslandForScreenSize();

  const adjustPlaneForScreenSize = (): XYZParams[] => {
    let screenScale: XYZParams;
    let screenPosition: XYZParams;
    const ROTATION: XYZParams = [0, 20, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.15, 0.15, 0.15];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition, ROTATION];
  };

  const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();

  const {
    balloonPosition,
    balloonRotation,
    balloonScale,
  }: Record<string, XYZParams> = {
    balloonRotation: [0, 0, 0],
    balloonScale: [0.9, 0.9, 0.9],
    balloonPosition: [1, 1, 1],
  };

  return {
    balloonPosition,
    balloonRotation,
    balloonScale,
    islandScale,
    islandPosition,
    islandRotation,
    planeScale,
    planePosition,
    planeRotation,
  };
};
