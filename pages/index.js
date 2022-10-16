import Container from "../components/container";
import Watermark from "../components/watermark";
import Title from "../components/title";
import Preview from "../components/preview";
import CTADesign from "../components/cta-design";

export default function Home() {
  return (
    <Container>
      <Title label={"T-shirt designer"} />
      <CTADesign />
      <Watermark label={"T-shirt designer"} />
    </Container>
  );
}
