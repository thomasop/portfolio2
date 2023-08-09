import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/scene/Scene";
import { Overlay } from "./components/Overlay";

const Home = () => {
  const scroll = useRef(0);
  return (
    <>
      <Canvas shadows flat linear>
        <Suspense fallback={null}>
          <Scene scroll={scroll} />
        </Suspense>
      </Canvas>
      <Overlay scroll={scroll} />
    </>
  );
};

export default Home;
