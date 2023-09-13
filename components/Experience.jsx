import { MeshReflectorMaterial, PresentationControls, Stage, } from "@react-three/drei";
import { useThree } from '@react-three/fiber'
import { Block } from "./Block";
import { Html } from "@react-three/drei";
const cubeMatrix = [
  [-3, 12, -3],
  [0, 12, -3],
  [3, 12, -3],
  [-3, 9, -3],
  [0, 9, -3],
  [3, 9, -3],
  [-3, 6, -3],
  [0, 6, -3],
  [3, 6, -3]
]
const Experience = ({ group }) => {
  const { gl, scene, camera } = useThree();


  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-1, Math.PI / 4]}
        rotation={[Math.PI / 16, 0, 0]}
      >
        <Stage  >
          <group ref={group}>
            {cubeMatrix.map((cubePos) => {
              return (
                < Block position={cubePos} ></Block>
              )
            })}
          </group>
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-x={-6} position-y={-6}>
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
        </mesh>
      </PresentationControls >
    </>
  );
};

export default Experience;