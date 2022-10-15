import { useRouter } from "next/router";

const CTADesign = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/designer");
  };
  return (
    <div className="w-full text-center pt-8">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-black text-white rounded-xl"
      >
        Go to designer!
      </button>
    </div>
  );
};

export default CTADesign;
