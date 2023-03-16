// Importing required modules
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import Link from "next/link";
import { GoX } from "react-icons/go";

// Styling Components Using Styled components module
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

//Image List Component
const ImageList = ({ images }) => {
  //Set initial state for imageList using useState hook
  const [imageList, setImageList] = useState(images || []);

  //Handle delete function with useCallback hook
  const handleDelete = useCallback(
    (event, id) => {
      event.preventDefault();
      //Filter out the deleted image and update image list using prevImages argument of setState method
      setImageList((prevImages) =>
        prevImages.filter((image) => image.id !== id)
      );
      const updatedImageList = imageList.filter((image) => image.id !== id);
      localStorage.setItem("images", JSON.stringify(updatedImageList));
    },
    [imageList]
  );

  //Get saved images from local storage using useEffect Hook
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("images"));
    if (savedImages) {
      setImageList(savedImages);
    }
  }, []);

  return (
    //Component wrapper that uses style component
    <ImageListWrapper>
      {/* Check if imageList is defined before calling map() */}
      {imageList &&
        imageList.map(({ src, id }) => (
          <ImageContainer key={id}>
            {/* Use next/link component to link each image to its detail page */}
            <Link href={`/image/${id}`}>
              <ImageWrapper>
                {/* Use next/image component to render each image */}
                <Image
                  src={src} //Image source URL
                  alt={`My Image ${id}`}
                  objectFit="cover" //Image fit type
                  priority={id < 4} //Loading priority for an individual picture
                  width={1000} //Width of image
                  height={1000} //Height of image
                />
                {/* Delete Icon added in each ImageWrapper */}
                <DeleteIcon onClick={(event) => handleDelete(event, id)} />
              </ImageWrapper>
            </Link>
          </ImageContainer>
        ))}
    </ImageListWrapper>
  );
};

//Export Image List component as default export
export default ImageList;
