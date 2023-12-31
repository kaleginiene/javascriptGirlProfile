/* eslint-disable @typescript-eslint/ban-ts-comment */

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import shrekScene from "src/assets/3d/shrek_hip_hop_dance.glb";
import { ModelProps } from "../modelsTypes";

const ShrekModel: React.FC<ModelProps> = (props) => {
  const shrekRef = useRef<any>();
  // @ts-ignore
  // NOTE: Not well typed hook
  const { nodes, materials, animations } = useGLTF(shrekScene);
  const { actions } = useAnimations(animations, shrekRef);

  useEffect(() => {
    actions["mixamo.com"]?.play();
  }, [actions]);

  return (
    <group ref={shrekRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        >
          <group
            name="c0666c4c7b514d2582d5a98691bf4f15fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Shrek_0mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.shrekshirt_S_0mat}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="Object1" />
                  <group name="Object2" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default ShrekModel;
