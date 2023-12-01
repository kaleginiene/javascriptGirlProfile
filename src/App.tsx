import React, { Suspense, useEffect, useState } from "react";
import "./index.css";

import { Canvas } from "@react-three/fiber";
import { Loader } from "./components/Loader";
import Island from "./models/Island";
import Sky from "./models/Sky";
import Bird from "./models/Bird";
import Plane from "./models/Plane";

type XYZParams = [number, number, number];

export const App: React.FC = () => {
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
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
        }}
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* Ambient light illuminates all the objects */}
          <ambientLight intensity={0.5} />
          <spotLight />
          <hemisphereLight
            color="#b1e1FF"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />

          <Sky isRotating={isRotating} />
          <Island
            setCurrentStage={setCurrentStage}
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
