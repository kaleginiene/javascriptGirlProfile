import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Header, Loader, PopUpsList } from "src/components";
import Island from "src/models/Island";
import Plane from "src/models/Plane";
import Balloon from "src/models/Balloon";
import { use3DModels } from "./use3DModels";
import ShrekModel from "src/models/Shrek";

const ThreeDWorld: React.FC = () => {
  const {
    balloonPosition,
    balloonRotation,
    balloonScale,
    islandScale,
    islandPosition,
    islandRotation,
    planeScale,
    planePosition,
    planeRotation,
    isRotating,
    currentStage,
    setIsRotating,
    setCurrentStage,
  } = use3DModels();

  return (
    <section className="w-full h-screen relative">
      <Header />
      <PopUpsList currentStage={currentStage} />
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
          <ambientLight intensity={0.2} />
          <spotLight />
          <hemisphereLight
            color="#b1e1FF"
            groundColor="#000000"
            intensity={1}
          />
          <Balloon
            isRotating={isRotating}
            position={balloonPosition}
            scale={balloonScale}
            rotation={balloonRotation}
          />
          <Island
            setCurrentStage={setCurrentStage}
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <ShrekModel scale={[0.8, 0.8, 0.8]} position={[0, -2, 0]} />

          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={planeRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default ThreeDWorld;
