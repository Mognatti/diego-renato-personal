import { breakingPoints } from "./../../../../styles/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  max-height: 92vh;
  margin: 0 5vw;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakingPoints.bigPhone}) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2vh;
    height: 68vh;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 400;
  margin: 0;
  font-size: 5.5em;
  @media (max-width: ${breakingPoints.smallPC}) {
    font-size: 4em;
  }
  @media (max-width: ${breakingPoints.bigTablet}) {
    font-size: 3em;
  }
`;

export const FirstName = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const LastName = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

export const SubTitle = styled.p`
  margin: 0;
  padding-left: 8px;
  font-size: ${(props) => props.theme.fontSize.highlight};
  @media (max-width: ${breakingPoints.bigPhone}) {
    margin-bottom: 2vh;
    text-align: center;
  }
`;

export const SelfImage = styled.img`
  height: 90vh;
  opacity: 0.7;
  @media (max-width: ${breakingPoints.smallPC}) {
    height: 70vh;
  }
  @media (max-width: ${breakingPoints.bigTablet}) {
    height: 40vh;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    height: 45vh;
    border-bottom: 5px solid ${(props) => props.theme.colors.primary};
  }
`;
