import styled from "styled-components";
import ImageList from "./components/ImageList";

const Container = styled.div`
  max-width: 100%;
  padding: 20px;
  padding-top: 80px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto 32px auto;
  color: #000000;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #4caf50;
  }
`;

// Exporting a Home function which receives props and returns the JSX for the page
export default function Home({ images }) {
  return (
    <Container>
      <Title>Welcome to PICJUDGE</Title>
      <ImageList images={images} />
    </Container>
  );
}

// getServerSideProps() function is Next.js specific and runs on server-side. It is used to fetch data and pass it as props to the Home component.
export async function getServerSideProps() {
  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/image${i + 1}.png`,
    alt: `My Image ${i + 1}`,
    id: i + 1,
  }));

  // Returns props named images, which includes an array of 20 image objects
  return { props: { images } };
}
