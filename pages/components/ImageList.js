import styled from "styled-components";
import Image from "next/legacy/image";
import Link from "next/link";

const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ImageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.5),
    0 0 20px rgba(128, 128, 128, 0.4), 0 0 30px rgba(128, 128, 128, 0.3),
    0 0 40px rgba(128, 128, 128, 0.2), 0 0 50px rgba(128, 128, 128, 0.1),
    0 0 60px rgba(128, 128, 128, 0), 0 0 70px rgba(255, 255, 255, 0);
  background: linear-gradient(to bottom, #444444, #ffffff);
`;

// Create an ImageList functional component that will return a list of images displayed inside the ImageListWrapper component
const ImageList = () => {
  // create an array of images with their source and id
  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/image${i + 1}.png`,
    id: i + 1, // use the image number as the id
  }));

  return (
    <ImageListWrapper>
      {/* map through the images array and create a Link component for each image with its corresponding id */}
      {images.map(({ src, id }) => (
        <Link href={`/image/${id}`} key={id}>
          <ImageWrapper>
            <Image
              src={src}
              alt={`My Image ${id}`}
              width={180}
              height={200}
              objectFit="contain"
              layout="intrinsic"
              priority={id < 4}
            />
          </ImageWrapper>
        </Link>
      ))}
    </ImageListWrapper>
  );
};

export default ImageList;
