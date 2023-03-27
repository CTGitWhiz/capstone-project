import styled from "styled-components";
import { FiInfo } from "react-icons/fi";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SliderButton = styled.button`
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

export const SliderLabel = styled.label`
  color: #ffffff;
`;

export const ImagePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 20px;
  padding-top: 80px;
`;

export const RangeInput = styled.input`
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

export const InfoIcon = styled(FiInfo)`
  margin: auto;
  font-size: 40px;
  color: #ffcc00;
  transition: transform 0.2s ease-in-out, color 0.4s ease-in-out;

  &:active {
    transform: scale(2);
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;
  touch-action: manipulation;
`;

export const TooltipText = styled.div`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  width: 350px;
  height: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translate(-50%, -100%);
`;

export const TooltipTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #ffcc00;
`;

export const TooltipTextItem = styled.p`
  font-size: 12px;
  margin-bottom: 20px;
  margin-top: -10px;
`;
