import styled from "styled-components";
import { FaFingerprint, FaAppleAlt } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { breakingPoints } from "../../../../styles/theme";
import { Container } from "../../../../styles/reusable";

export const NewContainer = styled(Container)`
  height: 98vh;
  @media (max-width: ${breakingPoints.smallPC}) {
    height: fit-content;
    padding-bottom: 2vh;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
  margin: 10vh 5vw 0 5vw;
  @media (max-width: ${breakingPoints.smallPC}) {
    margin: 5vh 0 0 0;
  }
  @media (max-width: ${breakingPoints.bigTablet}) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Image = styled.img`
  width: 450px;
  border-radius: 16px;
  box-shadow: 0 0 15px ${(props) => props.theme.colors.primary};
  @media (max-width: ${breakingPoints.smallPC}) {
    width: 400px;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 350px;
  }
  @media (max-width: ${breakingPoints.mobile}) {
    width: 320px;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding-top: 2vh;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSize.highlight};
  @media (max-width: ${breakingPoints.smallPC}) {
    font-size: 1.2em;
  }
  @media (max-width: ${breakingPoints.smallTablet}) {
    font-size: 1em;
  }
`;

export const IconList = styled.ul`
  display: flex;
  gap: 8vw;
  justify-content: center;
  align-items: center;
  margin-top: 12vh;
  @media (max-width: ${breakingPoints.smallPC}) {
    margin-top: 8vh;
  }
  @media (max-width: ${breakingPoints.bigTablet}) {
    margin-top: 4vh;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    flex-wrap: wrap;
  }
`;

export const Icon = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2vh 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 45%;
`;

export const FingerIcon = styled(FaFingerprint)`
  color: ${(props) => props.theme.colors.primary};
`;
export const HealthIcon = styled(GiHealthNormal)`
  color: ${(props) => props.theme.colors.primary};
`;
export const ClockIcon = styled(BsClock)`
  color: ${(props) => props.theme.colors.primary};
`;
export const FruitIcon = styled(FaAppleAlt)`
  color: ${(props) => props.theme.colors.primary};
`;
