import React, { Suspense, lazy, useContext, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Header } from "src/components";
const Island = lazy(() => import("src/models/Island/Island"));
const Plane = lazy(() => import("src/models/Plane/Plane"));
const Balloon = lazy(() => import("src/models/Ballon/Balloon"));
const ShrekModel = lazy(() => import("src/models/Shrek/Shrek"));

import { use3DModels } from "./use3DModels";
import { islandRotationContext } from "src/contexts/islandRotationContext";
import { LoaderSection } from "./components/LoaderSection/LoaderSection";
import PopUpsList from "src/components/popUps/PopUpsList";

const ThreeDWorld: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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

  return (
    <section className="w-full h-screen fixed">
      <Header />
      <Suspense fallback={<LoaderSection />}>
        <Canvas
          camera={{
            near: 0.1,
            far: 1000,
          }}
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.2} />
          <spotLight />
          <hemisphereLight intensity={1} />
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
            setIsLoadedIsland={setIsLoaded}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={planeRotation}
          />
        </Canvas>
      </Suspense>
      <PopUpsList isLoaded={isLoaded} currentStage={currentStage} />
    </section>
  );
};

export default ThreeDWorld;
