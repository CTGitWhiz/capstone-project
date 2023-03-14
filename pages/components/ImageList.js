import styled from "styled-components";
import Image from "next/legacy/image";
import Link from "next/link";
import { GoX } from "react-icons/go";

const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  position: relative;
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

const DeleteIcon = styled(GoX)`
  font-size: 30px;
  color: #ffcc00;
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid white;
  outline: 1px solid black;
  background-color: white;
  transition: all 0.3s ease-in-out;

  position: absolute;
  bottom: -5px;
  right: -5px;
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
              objectFit="cover"
              layout="intrinsic"
              priority={id < 4}
              width={1000}
              height={1000}
              max-width="100%"
              max-height="100%"
            />
            <DeleteIcon />
          </ImageWrapper>
        </Link>
      ))}
    </ImageListWrapper>
  );
};

export default ImageList;
