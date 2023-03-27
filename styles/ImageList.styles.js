import styled from "styled-components";
import { GoX } from "react-icons/go";

export const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ImageListWrapper = styled.div`
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

export const DeleteIcon = styled(GoX)`
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

export const ImageContainer = styled.div`
  position: relative;
`;
