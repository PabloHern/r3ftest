import { MeshReflectorMaterial, OrbitControls, Environment, } from "@react-three/drei";
import { useThree } from '@react-three/fiber'
import { Block } from "./Block";
import { Html } from "@react-three/drei";
import { Clickbox } from "./Clickbox";
import { useRef, useState, useEffect, useContext } from "react";
import CubeContext from "@/context/CubeContext";
const Experience = ({ group }) => {
  const { cubess, addCube } = useContext(CubeContext)
  const [cubes, setCubes] = useState([
    [0, 0, -3],
  ])
  const controls = useRef()
  // useEffect(() => {
  //   const newCube = (
  //     < Clickbox position={[0, 0, -3]} ></Clickbox>
  //   )
  //   addCube(newCube)
  //   console.log(cubess)
  // }, [])
  return (
    <>
      <OrbitControls ref={controls} minPolarAngle={Math.PI / 2} zoom={false} maxPolarAngle={Math.PI / 2} />
      <group ref={group} position={[0, 0, 0]}>
        {cubess.map((cubePos, index) => {
          return (
            cubess[index]
          )
        })}
      </group>
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-x={-6} position-y={-6}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh> */}
    </>
  );
};

export default Experience;