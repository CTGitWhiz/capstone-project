import styled from "styled-components";
import ImageList from "./components/ImageList";

const Container = styled.div`
  max-width: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Title>Welcome to PicJudge xD</Title>
      <ImageList />
    </Container>
  );
}
