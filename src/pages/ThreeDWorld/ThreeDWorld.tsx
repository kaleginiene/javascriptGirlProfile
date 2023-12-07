import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Loader, PopUpsList } from "../../components";
import Island from "../../models/Island";
import Sky from "../../models/Sky";
import Plane from "../../models/Plane";
import Balloon from "../../models/Balloon";

import { use3DModels } from "./use3Dmodels";

const ThreeDWorld: React.FC = () => {
  const {
    islandScale,
    islandPosition,
    islandRotation,
    planeScale,
    planePosition,
    isRotating,
    currentStage,
    setIsRotating,
    setCurrentStage,
  } = use3DModels();

  return (
    <section className="w-full h-screen relative">
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
          {/* Ambient light illuminates all the objects */}
          <ambientLight intensity={0.5} />
          <spotLight />
          <hemisphereLight
            color="#b1e1FF"
            groundColor="#000000"
            intensity={1}
          />

          <Sky isRotating={isRotating} />
          <Balloon
            isRotating={isRotating}
            position={[1, 1, 1]}
            scale={[0.9, 0.9, 0.9]}
            rotation={[0, 0, 0]}
          />
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

export default ThreeDWorld;
