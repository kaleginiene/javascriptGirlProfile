/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

import skyScene from "../assets/3d/sky.glb";
import { ModelProps } from "./Island";
import { useFrame } from "@react-three/fiber";

const Sky: React.FC<ModelProps> = ({ isRotating }) => {
  const sky: any = useGLTF(skyScene);
  const skyRef = useRef<any>();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
