import { Canvas } from "@react-three/fiber";
import RotateControl from "../rotate-control";
import Tshirt from "../tshirt";
import {Suspense} from "react";

const Preview = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas 
        style={{height:"100%",width:"100%"}}
        camera={{
          position: [1.5, 0, 0],
        }}
      >
        <ambientLight color={"white"} intensity={1} />
        <Suspense fallback={null}>¡
          <Tshirt color={"red"}/>
        </Suspense>
        <RotateControl />
      </Canvas>
    </div>
  );
};

export default Preview;
