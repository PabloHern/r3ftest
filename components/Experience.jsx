import { useThree, useFrame } from '@react-three/fiber'
import { Clickbox } from "./Clickbox";
import { easing } from 'maath'
import * as THREE from 'three'
import BoxUI from './BoxUI';
import { useRef, useState, useEffect, useContext } from "react";
const Experience = ({ groupRef, }) => {
  const [cubes, setCubes] = useState([[0, 0, -3], [3, 0, -3]])
  // const [active, setActive] = useState(false)
  const clicked = useRef()
  const [active, setActive] = useState(false)
  const p = useRef()
  const handleActive = (e, index) => {
    clicked.current = groupRef.current.getObjectByName(index)
    console.log(clicked.current)

    if (clicked.current !== undefined) {
      setActive(true)
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.current.set(clicked.current.position.x, clicked.current.position.y, 1.85))
      console.log(p)

    } else {
      setActive(false)
      p.current.set(0, 0, 5.5)
      console.log(p)
    }
  }
  useEffect(() => {
    p.current = new THREE.Vector3(0, 0, 5.5)
  }, [])


  useFrame((state, dt) => {
    if (p.current !== undefined) {
      console.log(p.current)
      easing.damp3(state.camera.position, p.current, 0.4, dt)
    }
  })
  return (
    <>
      {/* <OrbitControls ref={controls} minPolarAngle={Math.PI / 2} zoom={false} maxPolarAngle={Math.PI / 2} /> */}
      <group ref={groupRef} position={[0, 0, 0]}>
        {cubes.map((cubePos, index) => {
          return (
            < Clickbox name={index} cubes={cubes} setCubes={setCubes}
              position={cubePos} onClick={(e) => (e.stopPropagation(), handleActive(e, index))}
              onPointerMissed={(e) => (e.stopPropagation(), handleActive(e, null))} ></Clickbox>
          )
        })}
      </group>
      {active ? <BoxUI cubes={cubes} setCubes={setCubes} clickBox={clicked.current} ></BoxUI> : ""}

    </>
  );
};

export default Experience;