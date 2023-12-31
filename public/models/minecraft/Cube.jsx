/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf --transform 
Files: scene.gltf [3.38KB] > scene-transformed.glb [14.55KB] (-330%)
Author: Render at Night (https://sketchfab.com/Render_at_Night)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/minecraft-grass-block-84938a8f3f8d4a0aa64aaa9c4e4d27d3
Title: Minecraft Grass Block
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cube(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Grass_Block_TEX} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
