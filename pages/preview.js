import Container from "../components/container";
import Watermark from "../components/watermark";
import Title from "../components/title";
import Preview from "../components/preview";
import { useRouter } from "next/router";

export default function PreviewPage() {
  const router = useRouter()
  const {color, pattern} = router.query
  return (
    <div>
      <Container>
        <Preview params={{color, pattern}}/>
      </Container>
      <Title label={"T-shirt designer"} fixed />
      <Watermark label={"T-shirt designer"} />
    </div>
  );
}
