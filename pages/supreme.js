import { useState, useEffect } from "react";
import Image from "next/legacy/image";

import {
  SupremeContainer,
  SupremeTitle,
  CategoryTitle,
  ImageContainer,
  NoImageMessage,
} from "../styles/Supreme.styles";

// Categories array
const categories = [
  "Creativity",
  "Technical Quality",
  "Emotional Impact",
  "Coherence",
  "Realism",
];

// Function to check if the code is running in a client-side environment and get the range values
function getClientSideRangeValues() {
  if (typeof window === "undefined") {
    return null;
  }
  // If the window object is defined, return the stringified range values from local storage
  return JSON.stringify(localStorage.getItem("rangeValues"));
}

// Custom hook to get top rated images
function useTopRatedImages() {
  const [topRatedImages, setTopRatedImages] = useState([]);

  // useEffect hook to load top-rated images when the component is mounted or range values change
  useEffect(() => {
    // If getClientSideRangeValues() returns a falsy value, do not run the effect
    if (!getClientSideRangeValues()) {
      return;
    }

    // Get saved range values from local storage, or use an empty object if they don't exist
    const savedRangeValues =
      JSON.parse(localStorage.getItem("rangeValues")) || {};

    // If there are no saved range values, do not run the effect
    if (Object.keys(savedRangeValues).length === 0) {
      return;
    }

    // Find the highest-rated images for each category
    const highestRatedImages = categories.map((_, index) => {
      let highestRatedImageId = null;
      let highestRating = 0;
      let latestTimestamp = 0;

      // Iterate over the saved range values and find the highest-rated image
      for (const imageId in savedRangeValues) {
        const rating = parseInt(savedRangeValues[imageId][index]);
        const timestamp = savedRangeValues[imageId][5];

        // Update the highest-rated image if a higher rating (greater than 0) is found,
        // or if the rating is the same or higher, always consider the more recent timestamp
        if (
          (rating > highestRating && rating > 0) ||
          (rating >= highestRating && timestamp > latestTimestamp && rating > 0)
        ) {
          highestRating = rating;
          highestRatedImageId = imageId;
          latestTimestamp = timestamp;
        }
      }

      return { categoryIndex: index, imageId: highestRatedImageId };
    });

    // Update the topRatedImages state with the highest-rated images
    setTopRatedImages(highestRatedImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getClientSideRangeValues()]);

  return topRatedImages;
}

// Functional component to display the image or a message if no image is found for the category
function SupremeImage({ categoryIndex, imageId }) {
  if (imageId) {
    return (
      <ImageContainer>
        <Image
          src={`/image${imageId}.png`}
          alt={`My Image ${imageId}`}
          width={1000}
          height={1000}
          objectFit="cover"
        />
      </ImageContainer>
    );
  } else {
    return (
      <NoImageMessage>
        Oops, looks like this category has not been rated yet, no image to show!
      </NoImageMessage>
    );
  }
}

// Main component
export default function Supreme() {
  const topRatedImages = useTopRatedImages();

  // Render the top-rated images showcase
  return (
    <SupremeContainer>
      <SupremeTitle>Top-Rated Images Showcase</SupremeTitle>
      {topRatedImages.map(({ categoryIndex, imageId }) => (
        <div key={categoryIndex}>
          <CategoryTitle>{categories[categoryIndex]}</CategoryTitle>
          <SupremeImage categoryIndex={categoryIndex} imageId={imageId} />
        </div>
      ))}
    </SupremeContainer>
  );
}
