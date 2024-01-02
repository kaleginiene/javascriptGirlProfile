import React, { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";

import { Header, Loader, PopUpsList } from "src/components";
import Island from "src/models/Island/Island";
import Plane from "src/models/Plane/Plane";
import Balloon from "src/models/Ballon/Balloon";
import ShrekModel from "src/models/Shrek/Shrek";

import { use3DModels } from "./use3DModels";
import { islandRotationContext } from "src/contexts/islandRotationContext";

const ThreeDWorld: React.FC = () => {
  const { isRotating, currentStage } = useContext(islandRotationContext);
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
  } = use3DModels();

  console.log(currentStage);

  return (
    <section className="w-full h-screen fixed">
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
          <ShrekModel
            isRotating={isRotating}
            scale={[0.7, 0.7, 0.7]}
            position={[0, -1, 0]}
          />
          <Island
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
          />
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
