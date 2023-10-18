import { breakingPoints } from "./../../../../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 5vw 0 5vw;
`;
export const Disclaimer = styled.p`
  font-size: ${(props) => props.theme.fontSize.highlight};
  text-align: justify;
  @media (max-width: ${breakingPoints.bigPhone}) {
    font-size: ${(props) => props.theme.fontSize.regular};
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PlanContainer = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-items: center;
  align-items: center;
  overflow-y: hidden;
  @media (max-width: ${breakingPoints.bigPhone}) {
    align-items: flex-start;
  }
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.big};
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  @media (max-width: ${breakingPoints.bigPhone}) {
    font-size: 1.7em;
    position: absolute;
    margin-left: 2vw;
  }
`;

export const PlanList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: ${breakingPoints.bigPhone}) {
    justify-content: start;
    gap: 8vw;
    width: 900px;
    margin-top: 8vh;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 8px;
  width: 270px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0 0 15px #242424;
  &:nth-of-type(2) {
    height: 350px;
    width: 300px;
    z-index: 10;
    @media (max-width: ${breakingPoints.bigPhone}) {
      width: 270px;
      height: 300px;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.highlight};
  font-weight: 400;
  margin: 24px 0 18px 0;
`;

export const CardPrice = styled.h1`
  margin: 12px 0;
  @media (max-width: ${breakingPoints.smallTablet}) {
    font-size: 1.7em;
  }
`;

export const CardCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 18px;
`;

export const CardData = styled.p`
  margin: 0;
  padding: 6px;
  border-bottom: 1px solid #fff4;
  width: 160px;
  text-align: center;
  font-size: 1.15em;
  &:nth-last-of-type(1) {
    font-size: 0.8em;
    border: none;
    margin-top: 1vh;
  }
`;
