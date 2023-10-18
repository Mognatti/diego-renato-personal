import { styled } from "styled-components";
import { breakingPoints } from "../../../../styles/theme";

export const CallToActionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3vh;
  margin-top: 5vh;
`;

export const CallToActionText = styled.p`
  font-size: 1.5em;
  margin: 8px 0;
  @media (max-width: ${breakingPoints.bigPhone}) {
    text-align: center;
  }
`;

export const CallToActionButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5vw;
`;

export const ImgBanner = styled.img`
  width: 400px;
  height: 128px;
  transition: 350ms;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: ${breakingPoints.bigTablet}) {
    width: 300px;
    height: 93px;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 190px;
    height: 60px;
  }
`;

export const CallToActionButton = styled.button`
  padding: 8px;
  border-radius: 8px;
  width: 300px;
  height: 50px;
  outline: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
`;
