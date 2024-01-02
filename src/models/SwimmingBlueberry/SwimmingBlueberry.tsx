/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import blueberryScene from "src/assets/3d/blueberry_on_vacation.glb";
import { ModelProps } from "../Island/Island";

const SwimmingBlueberry: React.FC<ModelProps> = (props) => {
  const blueberryRef = useRef<any>();

  // @ts-ignore
  const { nodes, materials } = useGLTF(blueberryScene);

  return (
    <group ref={blueberryRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Blue_0.geometry}
            material={materials.Blue}
            position={[214.122, 181.516, -37.12]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={54.83}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_Blue_0.geometry}
            material={materials.Blue}
            position={[-83.683, 0, -98.081]}
            scale={[85.752, 90.87, 85.752]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Blueberry000_Blue_0.geometry}
            material={materials.Blue}
            position={[0, 167.7, 0]}
            rotation={[-Math.PI / 2, 0, -0.313]}
            scale={198.499}
          />
        </group>
      </group>
    </group>
  );
};

export default SwimmingBlueberry;
