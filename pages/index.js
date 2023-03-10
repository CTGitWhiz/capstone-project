import styled from "styled-components";
import ImageList from "./components/ImageList";

const Container = styled.div`
  max-width: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 0 auto 2rem auto;
  color: #000000;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #4caf50;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Welcome to PicJudge xD</Title>
      <ImageList />
    </Container>
  );
}
