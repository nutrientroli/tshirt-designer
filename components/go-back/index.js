import { useRouter } from "next/router";

const GoBack = ({path="/", params}) => {
  const router = useRouter();
  const { color, pattern } = params
  const handleClick = () => {
    if(path=="/") router.push(path)
    else router.push(path + `?${color ? "color=" + color : ""}${color && pattern ? "&": ""}${pattern ? "pattern=" + pattern : ""}`)
  };
  return (
    <div className="absolute top-14 md:top-8 left-0 z-10">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-black text-white rounded-r-xl"
      >
        Back
      </button>
    </div>
  );
};

export default GoBack;