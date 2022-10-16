import Container from "../components/container";
import Watermark from "../components/watermark";
import Title from "../components/title";
import Editor from "../components/editor";


export default function DesignerPage() {
  return (
    <div>
      <Container>
        <Editor />
      </Container>
      <Title label={"T-shirt designer"} fixed />
      <Watermark label={"T-shirt designer"} />
    </div>
  );
}
