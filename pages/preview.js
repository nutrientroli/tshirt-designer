import Container from "../components/container";
import Watermark from "../components/watermark";
import Title from "../components/title";
import Preview from "../components/preview";
import CTADesign from "../components/cta-design";
import GoBack from "../components/go-back"

export default function Home() {
  return (
    <Container>
      <Preview />
      <GoBack path="/designer"/>
      <Watermark label={"T-shirt designer"} />
    </Container>
  );
}
