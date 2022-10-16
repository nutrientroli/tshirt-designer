import { Canvas } from "@react-three/fiber";
import RotateControl from "../rotate-control";
import Tshirt from "../tshirt";
import {Suspense} from "react";
import { useRouter } from "next/router";
import GoBack from "../go-back";

const Preview = ({params}) => {
  const router = useRouter()
  let {color, pattern } = params
  console.log(router)
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
          <Tshirt color={color} pattern={pattern}/>
        </Suspense>
        <RotateControl />
      </Canvas>
      <GoBack path={router.pathname == "/designer" ? "/" : "/designer"} params={{color, pattern}}/>
    </div>
  );
};

export default Preview;
