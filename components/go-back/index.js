import { useRouter } from "next/router";

const GoBack = ({path="/"}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };
  return (
    <div className="absolute top-14 md:top-8 left-0">
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