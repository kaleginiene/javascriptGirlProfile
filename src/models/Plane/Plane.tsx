/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "src/assets/3d/plane.glb";
import { ModelProps } from "../Island/Island";

const Plane: React.FC<ModelProps> = ({ isRotating, ...props }) => {
  const ref = useRef<any>();
  // @ts-ignore
  // Not well typed hook
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
