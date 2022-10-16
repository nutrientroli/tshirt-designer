import Preview from "../preview";
import TshirtOptions from "../tshirt-options";
import BackgroundOptions from "../background-options";
import { useState } from "react";
import GoToPreview from "../go-to-preview";
import { useRouter } from "next/router";

const Editor = () => {
  const router = useRouter()
  const [color, setColor] = useState(router.query.color ?? "white");
  const [pattern, setPattern] = useState(router.query.pattern ?? "/texture1.png");

  return (
    <div>
      <Preview params={{ color, pattern }} />
      <TshirtOptions
        onChangeColorOption={(color) => setColor(color)}
        onChangePatternOption={(pattern) => setPattern(pattern)}
      />
      <BackgroundOptions />
      <GoToPreview params={{ color, pattern }} />
    </div>
  );
};

export default Editor;
