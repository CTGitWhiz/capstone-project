import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

const SupremeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 60px;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.5),
    0 0 20px rgba(128, 128, 128, 0.4), 0 0 30px rgba(128, 128, 128, 0.3),
    0 0 40px rgba(128, 128, 128, 0.2), 0 0 50px rgba(128, 128, 128, 0.1),
    0 0 60px rgba(128, 128, 128, 0), 0 0 70px rgba(255, 255, 255, 0);
  background: linear-gradient(to bottom, #ffffff, #444444);
`;

const SupremeTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #000000;
  white-space: nowrap;
`;

const CategoryTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px;
`;

// array containing categories to be displayed
const categories = [
  "Creativity",
  "Technical Quality",
  "Emotional Impact",
  "Coherence",
  "Realism",
];

export default function Supreme() {
  const [topRatedImages, setTopRatedImages] = useState([]);

  // effect hook to update state based on saved range values in localStorage
  useEffect(() => {
    const savedRangeValues =
      JSON.parse(localStorage.getItem("rangeValues")) || {};

    if (Object.keys(savedRangeValues).length === 0) {
      // If no ratings have been saved, exit the effect
      return;
    }

    const highestRatedImages = categories.map((_, index) => {
      let highestRatedImageId = null;
      let highestRating = -1;

      for (const imageId in savedRangeValues) {
        const rating = parseInt(savedRangeValues[imageId][index]);
        if (rating > highestRating) {
          highestRating = rating;
          highestRatedImageId = imageId;
        }
      }

      return { categoryIndex: index, imageId: highestRatedImageId };
    });

    setTopRatedImages(highestRatedImages);
  }, []);

  return (
    <SupremeContainer>
      <SupremeTitle>Top-Rated Images Showcase</SupremeTitle>
      {/* loop through top rated images and display each */}
      {topRatedImages.map(({ categoryIndex, imageId }) => (
        <div key={categoryIndex}>
          {/* Display category title */}
          <CategoryTitle>{categories[categoryIndex]}</CategoryTitle>
          {/* Display image if it exists */}
          {imageId && (
            <ImageContainer>
              <Image
                src={`/image${imageId}.png`}
                alt={`My Image ${imageId}`}
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </ImageContainer>
          )}
        </div>
      ))}
    </SupremeContainer>
  );
}
