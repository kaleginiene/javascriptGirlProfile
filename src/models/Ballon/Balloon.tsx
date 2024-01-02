/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "src/assets/3d/balloon.glb";
import { ModelProps } from "../Island/Island";

const Balloon: React.FC<ModelProps> = ({ ...props }) => {
  const ref = useRef<any>();
  // @ts-ignore
  // Not well typed hook
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Animation"]?.play();
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Balloon;
