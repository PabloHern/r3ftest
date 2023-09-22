import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { USDZExporter } from 'three/addons/exporters/USDZExporter.js';
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from '@/components/Experience';
const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  const download = () => {
    const exporter = new USDZExporter();
    console.log(group)
    exporter.parse(
      group.current,
      function (result) {
        saveArrayBuffer(result, "blocks.usdz");
      },
      // called when there is an error in the generation
      function (error) {

        console.log(error);

      },
      { binary: true }
    );
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
          <button onClick={() => download()}>Export scene</button>
        </div>
        <Canvas dpr={[1, 2]} >
          <color attach="background" args={["#fffff"]} />
          <fog attach="fog" args={["#fffff", 10, 20]} />
          <Experience group={group}></Experience>
        </Canvas>
      </div>
    </>
  )
}
