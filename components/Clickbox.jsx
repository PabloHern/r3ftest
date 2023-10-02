/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 clickbox001blend.gltf --transform 
Files: clickbox001blend.gltf [5.37KB] > clickbox001blend-transformed.glb [1.2KB] (78%)
*/

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { motion as threeMotion } from "framer-motion-3d"
import { motion } from "framer-motion"
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import BoxUI from './BoxUI'
import CustomMaterial from './CustomMaterial'
export function Clickbox(props) {
  const { nodes, materials } = useGLTF('models/clickbox/clickbox001blend-transformed.glb')
  const [active, setActive] = useState(false)
  const [color, setColor] = useState("#fff")
  const clickBox = useRef()
  const [rotationAngle, setRotationAngle] = useState(0);
  function toggle(e) {
    e.stopPropagation()
    setActive(!active)
  }

  const startRotation = (dir) => {
    setRotationAngle((prevAngle) => prevAngle + (Math.PI / 2) * dir);
  };

  useFrame(() => {
    if (clickBox.current.rotation.y !== rotationAngle) {
      clickBox.current.rotation.y += (rotationAngle - clickBox.current.rotation.y) * 0.05; // Smoothly rotate to the desired angle
    }
  });
  return (
    <>
      <group {...props} dispose={null} ref={clickBox}>
        {console.log(materials)}
        <threeMotion.mesh receiveShadow castShadow whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} onClick={(e) => toggle(e)} geometry={nodes.Cube.geometry} material={materials.Material} color={color} >
          <meshStandardMaterial color={color} />
        </threeMotion.mesh>
      </group>
      {active && <BoxUI clickBox={clickBox.current} startRotation={startRotation} setColor={setColor}></BoxUI>}
    </>
  )
}

useGLTF.preload('models/clickbox/clickbox001blend-transformed.glb')
