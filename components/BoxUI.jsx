import { Html } from '@react-three/drei'
import { motion } from "framer-motion"
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillPlusCircle } from "react-icons/ai";
import { useEffect } from 'react';
export default function BoxUI({ clickBox, startRotation, setColor, cubes, setCubes }) {
  const buttons = [
    { x: 0, y: 1.5, z: 0 },
    { x: 1.5, y: 0, z: 0 },
    { x: 0, y: -1.5, z: 0 },
    { x: -1.5, y: 0, z: 0 }
  ]
  const createCube = (index) => {
    if (index == 0) {
      const newCubes = [...cubes, [clickBox.position.x, clickBox.position.y + 3, clickBox.position.z]]
      setCubes(newCubes)
      console.log(cubes)
    }
    if (index == 1) {
      const newCubes = [...cubes, [clickBox.position.x + 3, clickBox.position.y, clickBox.position.z]]
      setCubes(newCubes)
      console.log(cubes)
    }
    if (index == 2) {
      const newCubes = [...cubes, [clickBox.position.x, clickBox.position.y - 3, clickBox.position.z]]
      setCubes(newCubes)
      console.log(cubes)
    }
    if (index == 3) {
      const newCubes = [...cubes, [clickBox.position.x - 3, clickBox.position.y, clickBox.position.z]]
      setCubes(newCubes)
      console.log(cubes)
    }
  }

  return (
    <>
      <Html center position={[clickBox.position.x, clickBox.position.y - 1.5, clickBox.position.z]} >
        <div className='rotateButtonContainer'>
          <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} >
            <button className='rotButton' onClick={() => startRotation(-1)}>
              <AiOutlineArrowLeft />
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} >
            <button className='rotButton' onClick={() => startRotation(1)}>
              <AiOutlineArrowRight />
            </button>
          </motion.div>
        </div>
      </Html>
      {buttons.map((button, index) => {
        return (<Html center position={[clickBox.position.x + button.x, clickBox.position.y + button.y, clickBox.position.z]} >
          <div className='rotateButtonContainer'>
            <motion.div whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} >
              <button className='addButton' onClick={() => createCube(index)}>
                <AiFillPlusCircle />
              </button>
            </motion.div>
          </div>
        </Html>)
      })}
      <Html center position={[clickBox.position.x - 2.5, clickBox.position.y, clickBox.position.z]}>
        <motion.div className='colorControls' whileHover={{ scale: 1.1 }}>
          <h2>Color</h2>
          <div className='colorContainer'>
            <motion.div whileTap={{ scale: 0.9 }} className='color-1' onClick={() => setColor("#fff")}></motion.div>
            <motion.div whileTap={{ scale: 0.9 }} className='color-2' onClick={() => setColor("#ff0000")}></motion.div>
            <motion.div whileTap={{ scale: 0.9 }} className='color-3' onClick={() => setColor("#008000")}></motion.div>
          </div>
        </motion.div>
      </Html>
    </>
  )
}