import { useRouter } from "next/router";

const GoToPreview = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/preview");
  };
  return (
    <div className="absolute top-14 md:top-8 right-0">
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