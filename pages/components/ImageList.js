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
  box-shadow: 0 0 0 3px black;
`;

const ImageList = () => {
  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/image${i + 1}.png`,
    id: i + 1, // use the image number as the id
  }));

  return (
    <ImageListWrapper>
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
