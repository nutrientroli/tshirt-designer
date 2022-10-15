import useDisclosure from "../../hooks/useDisclosure";

const OPTIONS = [
  {
    label: "Change color",
    action: () => {},
  },
  {
    label: "Change pattern",
    action: () => {},
  },
  {
    label: "Random tshirt",
    action: () => {},
  },
]

const TshirtOptions = () => {
  const { isOpen, open, close } = useDisclosure();
  return (
    <div className="absolute top-24 md:top-1/4 left-0">
      {!isOpen ? (
        <button
          onClick={open}
          className="py-2 px-4 bg-black text-white rounded-r-xl"
        >
          Open Tshirt options
        </button>
      ) : (
        <div className="pt-2 pb-4 px-4 bg-black text-white rounded-r-xl">
          <button onClick={close} className="bg-black text-white">
            Close Tshirt options
          </button>
          <div>
            {OPTIONS.map((item, index) => {
              return (
                <div className="pt-2">
                  <button
                    key={index}
                    onClick={item.action}
                    className="bg-black text-white"
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TshirtOptions;
