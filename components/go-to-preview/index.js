import { useRouter } from "next/router";

const GoToPreview = ({params}) => {
  const router = useRouter();
  let { color, pattern } = params
  
  const handleClick = () => {
    router.push(`/preview?${color ? "color=" + color : ""}${color && pattern ? "&": ""}${pattern ? "pattern=" + pattern : ""}`);
  };
  return (
    <div className="absolute top-14 md:top-8 right-0 z-10">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-black text-white rounded-l-xl"
      >
        Preview
      </button>
    </div>
  );
};

export default GoToPreview;