import styled from "styled-components";
import Image from "next/image";

const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: 3px solid #ccc;
`;

const ImageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
`;

const ImageList = () => {
  const images = Array.from(
    { length: 20 },
    (_, i) => `/Images/image${i + 1}.png`
  );

  return (
    <ImageListWrapper>
      {images.map((src, i) => {
        const id = `image${i + 1}`; // generate a unique id
        return (
          <ImageWrapper key={id}>
            <Image
              src={src}
              alt={`My Image ${i + 1}`}
              width={170}
              height={170}
              priority={i < 3}
            />
          </ImageWrapper>
        );
      })}
    </ImageListWrapper>
  );
};

export default ImageList;
