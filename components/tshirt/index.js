import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
const Tshirt = ({color="white", pattern="/texture1.png"}) => {
    const texture = useLoader(TextureLoader, pattern);
  return (
    <mesh>
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} color={color} />
    </mesh>
  );
};

export default Tshirt;
