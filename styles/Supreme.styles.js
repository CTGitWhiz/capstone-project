import styled from "styled-components";

export const SupremeContainer = styled.div`
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

export const SupremeTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #000000;
  white-space: nowrap;
`;

export const CategoryTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px;
`;

export const NoImageMessage = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #555555;
  margin-bottom: 20px;
  text-align: center;
`;
