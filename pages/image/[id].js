import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  ButtonWrapper,
  SliderButton,
  SliderLabel,
  ImagePageWrapper,
  RangeInput,
  InfoIcon,
  TooltipContainer,
  TooltipText,
  TooltipTitle,
  TooltipTextItem,
} from "../styles/[id].styles";

export default function ImagePage() {
  // Importing router hook for navigation within the app
  const router = useRouter();

  // Extracting the 'id' parameter from the router query
  const { id } = router.query;

  // Generating the URL for the image to be displayed
  const imageUrl = `/image${id}.png`;

  // Initializing state for the range values using the 'useState' hook
  const [rangeValues, setRangeValues] = useState([0, 0, 0, 0, 0]);

  // Initializing true/false state for displaying/hiding tooltips
  const [showTooltip, setShowTooltip] = useState(false);

  // Toggles between display/hide of tooltips
  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    toggleTooltip();
  };

  // useEffect hook - Runs on the initialization of the component, extracts and updates the saved range values from Local Storage.
  useEffect(() => {
    // Retrieving range values from local storage
    const savedRangeValues = JSON.parse(localStorage.getItem("rangeValues"));

    // If range values are found in local storage for this image ID, update the state with them
    if (savedRangeValues && savedRangeValues[id]) {
      setRangeValues(savedRangeValues[id]);
    }
  }, [id]);

  // Function to handle changes in the range values
  const handleRangeChange = (index, value) => {
    let newRangeValues = [...rangeValues];
    newRangeValues[index] = value;
    setRangeValues(newRangeValues);
  };

  // Function to handle saving the range values to local storage for the current image
  const handleSave = () => {
    // Retrieve existing range values from local storage, or initialize an empty object if they don't exist
    const savedRangeValues =
      JSON.parse(localStorage.getItem("rangeValues")) || {};

    // Adding the current timestamp to the rangeValues array
    const rangeValuesWithTimestamp = [...rangeValues, Date.now()];

    // Merging existing range values with the new range values for this image ID
    const updatedRangeValues = {
      ...savedRangeValues,
      [id]: rangeValuesWithTimestamp,
    };

    // Storing the updated range values to local storage
    localStorage.setItem("rangeValues", JSON.stringify(updatedRangeValues));

    alert(
      "Congratulations, you just made that AI feel all warm and fuzzy inside. Values saved!"
    );

    // Redirect to homepage
    router.back();
  };

  return (
    <ImagePageWrapper>
      {/* Next.js image component dynamically passes the URL of the image given the
      id parameter extracted above. */}
      <Image
        src={imageUrl}
        alt={`My Image ${id}`}
        width={1000}
        height={1000}
        objectFit="contain"
        layout="intrinsic"
      />

      <>
        {/* Tooltip element shown when InfoIcon is hovered over */}
        <TooltipContainer
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}
          onTouchEnd={handleTouchEnd}
          tabIndex="0"
        >
          <InfoIcon />
          <TooltipText show={showTooltip}>
            <TooltipTitle>Creativity:</TooltipTitle>
            <TooltipTextItem key="creativity">
              Measures the uniqueness and originality of the AI-generated image.
            </TooltipTextItem>
            <TooltipTitle>Technical Quality:</TooltipTitle>
            <TooltipTextItem>
              Evaluates the level of detail, clarity, and overall craftsmanship
              of the image.
            </TooltipTextItem>
            <TooltipTitle>Emotional Impact:</TooltipTitle>
            <TooltipTextItem key="emotional_impact">
              Considers how well the image captures and conveys an emotional
              tone or atmosphere.
            </TooltipTextItem>
            <TooltipTitle>Coherence:</TooltipTitle>
            <TooltipTextItem key="coherence">
              Determines how well the various elements of the image fit together
              harmoniously.
            </TooltipTextItem>
            <TooltipTitle>Realism:</TooltipTitle>
            <TooltipTextItem key="realism">
              Gauges how accurately and convincingly the image represents its
              subject matter.
            </TooltipTextItem>
          </TooltipText>
        </TooltipContainer>
      </>
      {/* Displays sliders for user ratings and enables rating inputs using 'handleRangeChange' function defined above */}
      <div>
        <div>
          <SliderLabel htmlFor="slider1">Creativity</SliderLabel>
          <RangeInput
            type="range"
            id="slider1"
            min={0}
            max={10}
            value={rangeValues[0]}
            onChange={(event) => handleRangeChange(0, event.target.value)}
          />
        </div>
        <div>
          <SliderLabel htmlFor="slider2">Technical Quality</SliderLabel>
          <RangeInput
            type="range"
            id="slider2"
            min={0}
            max={10}
            value={rangeValues[1]}
            onChange={(event) => handleRangeChange(1, event.target.value)}
          />
        </div>
        <div>
          <SliderLabel htmlFor="slider3">Emotional Impact</SliderLabel>
          <RangeInput
            type="range"
            id="slider3"
            min={0}
            max={10}
            value={rangeValues[2]}
            onChange={(event) => handleRangeChange(2, event.target.value)}
          />
        </div>
        <div>
          <SliderLabel htmlFor="slider4">Coherence</SliderLabel>
          <RangeInput
            type="range"
            id="slider4"
            min={0}
            max={10}
            value={rangeValues[3]}
            onChange={(event) => handleRangeChange(3, event.target.value)}
          />
        </div>
        <div>
          <SliderLabel htmlFor="slider5">Realism</SliderLabel>
          <RangeInput
            type="range"
            id="slider5"
            min={0}
            max={10}
            value={rangeValues[4]}
            onChange={(event) => handleRangeChange(4, event.target.value)}
          />
        </div>
      </div>
      {/* Button container to navigate back to the previous page and to save ratings. */}
      <ButtonWrapper>
        <SliderButton onClick={() => router.back()}>Back</SliderButton>
        <SliderButton onClick={handleSave}>Save</SliderButton>
      </ButtonWrapper>
    </ImagePageWrapper>
  );
}
