import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import * as THREE from 'three'
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { USDZExporter } from 'three/addons/exporters/USDZExporter.js';
import { useRef, useContext } from "react";
import CubeContext from '@/context/CubeContext';
import { Canvas } from "@react-three/fiber";
import { Clickbox } from '@/components/Clickbox';
import Experience from '@/components/Experience';
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const { addCube, cubes } = useContext(CubeContext)
  const downloadNormal = () => {
    const exporter = new GLTFExporter();
    exporter.parse(
      group.current,
      function (result) {
        saveArrayBuffer(result, "blocks.glb");
      },
      // called when there is an error in the generation
      function (error) {

        console.log(error);

      },
      { binary: true }
    );
  }
  const downloadApple = async () => {
    let groupClone = group.current.clone()
    groupClone.traverse((node) => {
      if (node.material !== undefined) {
        node.material.side = THREE.FrontSide
      }
    });
    const exporter = new USDZExporter();
    const arraybuffer = await exporter.parse(groupClone);
    const blob = new Blob([arraybuffer], { type: 'application/octet-stream' });

    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link); // Firefox workaround, see #6594
    link.href = URL.createObjectURL(blob);
    link.download = "blocks.usdz";
    link.click();

  }

  function saveArrayBuffer(buffer, filename) {
    save(new Blob([buffer], { type: "application/octet-stream" }), filename);
  }
  function save(blob, filename) {
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link); // Firefox workaround, see #6594
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
  const addTest = () => {
    const newCube = [0, 3, -3]
    addCube(newCube)
    console.log(cubes)
  }
  const group = useRef()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <div className='title-container'>
          <h1 className='title'>Create your configuration</h1>
          <h3 className='title'>Max number of cubes: 5</h3>
          <button onClick={() => downloadNormal()}>Export scene</button>
          <button onClick={() => downloadApple()}>Export scene usdz</button>
          <button onClick={() => addTest()}>TEST</button>
        </div>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 45 }} >
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
          <Experience group={group}></Experience>
        </Canvas>
      </div>
    </>
  )
}
