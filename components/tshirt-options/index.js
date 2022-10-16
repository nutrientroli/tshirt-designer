import useDisclosure from "../../hooks/useDisclosure";

const COLORS = [
  "white",
  "red",
  "black",
  "green",
  "blue",
  "yellow",
  "orange"
]

const PATTERNS = [
  "/texture1.png",
  "/texture2.jpg",
  "/texture3.png",
  "/texture4.png",
  "/texture5.png",
  "/texture6.jpg",
  "/texture7.png"
]

let iColor = 0
let iPattern = 0

const TshirtOptions = ({
  onChangeColorOption = () => {},
  onChangePatternOption = () => {},
}) => {
  const [isOpen, setIsOpen] = useDisclosure();

  const changeColor = () => {
    iColor++
    if(iColor>=COLORS.length) iColor=0
    onChangeColorOption(COLORS[iColor])
  }

  const changePattern = () => {
    iPattern++
    if(iPattern>=PATTERNS.length) iPattern=0
    onChangePatternOption(PATTERNS[iPattern])
  }

  const OPTIONS = [
    {
      label: "Change color",
      action: () => {
        changeColor()
      },
    },
    {
      label: "Change pattern",
      action: () => {
        changePattern()
      },
    },
    {
      label: "Random tshirt",
      action: () => {
        changeColor()
        changePattern()
      },
    },
  ];

  return (
    <div className="absolute top-28 md:top-1/4 left-0">
      {!isOpen ? (
        <button
          onClick={setIsOpen.open}
          className="py-2 px-4 bg-black text-white rounded-r-xl"
        >
          Open Tshirt options
        </button>
      ) : (
        <div className="pt-2 pb-4 px-4 bg-black text-white rounded-r-xl text-right">
          <button onClick={setIsOpen.close} className="bg-black text-white">
            Close Tshirt options
          </button>
          <div>
            {OPTIONS.map((item, index) => {
              return (
                <div key={index} className="pt-2">
                  <button onClick={item.action} className="bg-black text-white">
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
