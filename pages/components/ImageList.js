import React, { useState, useEffect, useCallback, useMemo } from "react";
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
  position: absolute;
  bottom: -5px;
  right: -5px;
  transform: scale(1.6);
  cursor: pointer;
  &:active {
    background-color: red;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ImageList = ({ images }) => {
  const [imageList, setImageList] = useState(images || []);

  const handleDelete = useCallback(
    (event, id) => {
      event.preventDefault();
      setImageList((prevImages) =>
        prevImages.filter((image) => image.id !== id)
      );
      const updatedImageList = imageList.filter((image) => image.id !== id);
      localStorage.setItem("images", JSON.stringify(updatedImageList));
    },
    [imageList]
  );

  const setLocalStorage = useMemo(
    () => () => {
      if (typeof window !== "undefined") {
        localStorage.setItem("images", JSON.stringify(imageList));
      }
    },
    [imageList]
  );

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("images"));
    if (savedImages) {
      setImageList(savedImages);
    }
  }, []);

  return (
    <ImageListWrapper>
      {/* Check if imageList is defined before calling map() */}
      {imageList &&
        imageList.map(({ src, id }) => (
          <ImageContainer key={id}>
            <Link href={`/image/${id}`}>
              <ImageWrapper>
                <Image
                  src={src}
                  alt={`My Image ${id}`}
                  objectFit="cover"
                  priority={id < 4}
                  width={1000}
                  height={1000}
                />
                <DeleteIcon onClick={(event) => handleDelete(event, id)} />
              </ImageWrapper>
            </Link>
          </ImageContainer>
        ))}
    </ImageListWrapper>
  );
};

export default ImageList;
