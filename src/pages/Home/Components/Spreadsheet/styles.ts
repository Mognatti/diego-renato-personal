import { breakingPoints } from "./../../../../styles/theme";
import styled from "styled-components";

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.big};
  margin: 4vh 0 2vh 0;
  @media (max-width: ${breakingPoints.smallTablet}) {
    text-align: center;
    font-size: 1.5em;
  }
  @media (max-width: ${breakingPoints.smallTablet}) {
    text-align: center;
    font-size: 1.5em;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    text-align: justify;
    font-size: ${(props) => props.theme.fontSize.highlight};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.2em;
  text-align: justify;
`;

export const BannerImg = styled.img`
  width: 310px;
  margin-top: 4vh;
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 270px;
  }
`;

export const LinkButtom = styled.a``;

export const Buttom = styled.img`
  width: 150px;
  position: absolute;
  left: 45%;
  margin-top: -120px;
  transition: 350ms;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: ${breakingPoints.smallPC}) {
    left: 42.5%;
    margin-top: -118px;
  }
  @media (max-width: ${breakingPoints.bigTablet}) {
    left: 40.5%;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 140px;
    left: 33%;
    margin-top: -105px;
  }
  @media (max-width: ${breakingPoints.mobile}) {
    left: 30%;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 4vh 0 0 0;
  padding: 0;
  @media (max-width: ${breakingPoints.bigTablet}) {
    margin: 0 0 2vh 0;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    flex-wrap: wrap;
    margin-bottom: -5vh;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 23%;
  height: 200px;
  text-align: justify;
  gap: 1.5vh;
  background-color: transparent;
  padding: 16px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: ${breakingPoints.smallPC}) {
    width: 28%;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: fit-content;
    height: fit-content;
  }
`;

export const ItemTitle = styled.div`
  text-align: center;
  font-size: 1.4em;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 5px 0;
`;

export const ItemDesc = styled.div`
  text-align: justify;
`;

export const Banner = styled.img`
  width: 99vw;
  padding: 4vh 0;
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 100vw;
  }
`;
