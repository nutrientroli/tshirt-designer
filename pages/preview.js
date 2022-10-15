import Container from "../components/container";
import Watermark from "../components/watermark";
import Title from "../components/title";
import Preview from "../components/preview";
import GoBack from "../components/go-back"

export default function Home() {
  return (
    <div>
      <Title label={"T-shirt designer"} fixed />
      <GoBack path="/designer" />
      <Watermark label={"T-shirt designer"} />
      <Container>
        <Preview />
      </Container>
    </div>
  );
}
