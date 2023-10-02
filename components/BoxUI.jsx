import { Html } from '@react-three/drei'
import { motion } from "framer-motion"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default function BoxUI({ clickBox, startRotation, setColor }) {
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
      <Html center position={[clickBox.position.x - 2, clickBox.position.y, clickBox.position.z]}>
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