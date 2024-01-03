/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "src/assets/3d/balloon.glb";
import { ModelProps } from "../modelsTypes";

const Balloon: React.FC<ModelProps> = ({ ...props }) => {
  const balloonRef = useRef<any>();
  // @ts-ignore
  // NOTE: Not well typed hook
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, balloonRef);

  useEffect(() => {
    actions["Animation"]?.play();
  }, [actions]);

  return (
    <mesh {...props} ref={balloonRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Balloon;
