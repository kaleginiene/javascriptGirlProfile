import React, { useEffect, useRef } from "react";

import birdSCene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const birdRef = useRef<any>();
  const { scene, animations } = useGLTF(birdSCene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, []);

  useFrame((_, delta) => {});

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
