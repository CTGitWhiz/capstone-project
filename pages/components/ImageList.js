import React, { useState, useEffect, useCallback } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import {
  ImageWrapper,
  ImageListWrapper,
  DeleteIcon,
  ImageContainer,
} from "../../styles/ImageList.styles";

//Image List Component
export default function ImageList({ images }) {
  //Set initial state for imageList using useState hook
  const [imageList, setImageList] = useState(images || []);

  //Handle delete function with useCallback hook
  const handleDelete = useCallback(
    (event, id) => {
      event.preventDefault();
      // Filter out the deleted image and update image list using prevImages argument of setState method
      setImageList((prevImages) =>
        prevImages.filter((image) => image.id !== id)
      );
      const updatedImageList = imageList.filter((image) => image.id !== id);
      localStorage.setItem("images", JSON.stringify(updatedImageList));

      // Remove the deleted image's range values from local storage
      const savedRangeValues =
        JSON.parse(localStorage.getItem("rangeValues")) || {};
      if (savedRangeValues[id]) {
        delete savedRangeValues[id];
        localStorage.setItem("rangeValues", JSON.stringify(savedRangeValues));
      }
      alert(`Oops! Image ${id} has vanished into the void!`);
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
                  src={src}
                  alt={`My Image ${id}`}
                  objectFit="cover"
                  priority={id < 20}
                  width={1000}
                  height={1000}
                />
                {/* Delete Icon added in each ImageWrapper */}
                <DeleteIcon
                  onClick={(event) => handleDelete(event, id)}
                  aria-label="Delete image"
                />
              </ImageWrapper>
            </Link>
          </ImageContainer>
        ))}
    </ImageListWrapper>
  );
}
