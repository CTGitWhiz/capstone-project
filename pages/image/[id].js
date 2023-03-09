import Image from "next/legacy/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const ImagePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const ImagePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const imageUrl = `/image${id}.png`;

  return (
    <ImagePageWrapper>
      <Image
        src={imageUrl}
        alt={`My Image ${id}`}
        width={500}
        height={500}
        objectFit="contain"
        layout="intrinsic"
      />
    </ImagePageWrapper>
  );
};

export default ImagePage;
