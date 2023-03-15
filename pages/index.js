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

export default function Home({ images }) {
  return (
    <Container>
      <Title>Welcome to PicJudge xD</Title>
      <ImageList images={images} />
    </Container>
  );
}

export async function getServerSideProps() {
  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/image${i + 1}.png`,
    alt: `My Image ${i + 1}`,
    id: i + 1,
  }));

  // Pass the images array as props to the Home component
  return { props: { images } };
}
