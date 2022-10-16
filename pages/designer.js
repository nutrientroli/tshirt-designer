import Container from "../components/container";
import Watermark from "../components/watermark";
import Title from "../components/title";
import Editor from "../components/editor";
import GoBack from "../components/go-back";
import GoToPreview from "../components/go-to-preview";

export default function Home() {
  return (
    <div>
      <Container>
        <Editor />
      </Container>
      <Title label={"T-shirt designer"} fixed />
      <GoBack />
      <GoToPreview />
      <Watermark label={"T-shirt designer"} />
    </div>
  );
}
