import Image from "next/legacy/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FiInfo } from "react-icons/fi";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SliderButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4caf50;
  color: #ffffff;
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const SliderLabel = styled.label`
  color: #ffffff;
`;

const ImagePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 20px;
`;

const RangeInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 5px;
  margin-bottom: 10px;
  -webkit-appearance: none;
  height: 10px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const InfoIcon = styled(FiInfo)`
  margin: auto;
  font-size: 30px;
  color: #ffcc00;
  transition: transform 0.2s ease-in-out, color 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    color: #ffffff;
  }

  &:active {
    color: #000000;
  }
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;
`;

const TooltipText = styled.div`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  width: 350px;
  height: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const TooltipTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #ffcc00;
`;

const TooltipTextItem = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: -10px;
`;

const ImagePage = () => {
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

  // Function to handle saving the range values to local storage
  const handleSave = () => {
    // Retrieving existing range values from local storage
    const savedRangeValues = JSON.parse(localStorage.getItem("rangeValues"));

    // Merging existing range values with the new range values for this image ID
    const updatedRangeValues = {
      ...savedRangeValues,
      [id]: rangeValues,
    };

    // Storing the updated range values to local storage
    localStorage.setItem("rangeValues", JSON.stringify(updatedRangeValues));

    alert("Values saved!");

    // Redirect to homepage
    router.push("/");
  };

  return (
    <ImagePageWrapper>
      {/* Next.js image component dynamically passes the URL of the image given the
      id parameter extracted above. */}
      <Image
        src={imageUrl}
        alt={`My Image ${id}`}
        width={500}
        height={500}
        objectFit="contain"
        layout="intrinsic"
      />
      <>
        {/* Tooltip element shown when InfoIcon is hovered over */}
        <TooltipContainer
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}
        >
          <InfoIcon />
          <TooltipText show={showTooltip}>
            <TooltipTitle>Creativity:</TooltipTitle>
            <TooltipTextItem>
              Measures the uniqueness and originality of the AI-generated image.
            </TooltipTextItem>
            <TooltipTitle>Technical Quality:</TooltipTitle>
            <TooltipTextItem>
              Evaluates the level of detail, clarity, and overall craftsmanship
              of the image.
            </TooltipTextItem>
            <TooltipTitle>Emotional Impact:</TooltipTitle>
            <TooltipTextItem>
              Considers how well the image captures and conveys an emotional
              tone or atmosphere.
            </TooltipTextItem>
            <TooltipTitle>Coherence:</TooltipTitle>
            <TooltipTextItem>
              Determines how well the various elements of the image fit together
              harmoniously.
            </TooltipTextItem>
            <TooltipTitle>Realism:</TooltipTitle>
            <TooltipTextItem>
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
};

export default ImagePage;
