import { styled } from "styled-components";
import { breakingPoints } from "../../../../styles/theme";

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:nth-of-type(1)::after {
    content: "";
    margin-top: 24px;
    width: 89vw;
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    margin-bottom: 16px;
  }
`;

export const PlanTitle = styled.h3`
  margin: 16px 0 0 0;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.big};
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: ${breakingPoints.bigPhone}) {
    font-size: ${(props) => props.theme.fontSize.highlight};
  }
`;

export const PlanDesc = styled.p`
  font-size: ${(props) => props.theme.fontSize.highlight};
  text-align: justify;
  padding: 16px 0;
  @media (max-width: ${breakingPoints.bigPhone}) {
    font-size: ${(props) => props.theme.fontSize.regular};
    margin-top: 0;
  }
`;

export const BannerContainer = styled.div`
  width: 310px;
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 270px;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  z-index: -1;
`;

export const ButtonLink = styled.a``;

export const Button = styled.img`
  width: 150px;
  transition: 350ms;
  z-index: 50;
  position: absolute;
  left: 45%;
  margin-top: 360px;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: ${breakingPoints.smallPC}) {
    left: 43%;
    margin-top: 365px;
  }
  @media (max-width: ${breakingPoints.bigTablet}) {
    left: 41.5%;
    margin-top: 365px;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 140px;
    left: 35%;
    margin-top: 318px;
  }
  @media (max-width: ${breakingPoints.mobile}) {
    left: 33%;
    width: 130px;
  }
`;

export const ButtonPremium = styled.img`
  width: 150px;
  transition: 350ms;
  z-index: 50;
  position: absolute;
  left: 45%;
  margin-top: 345px;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: ${breakingPoints.smallPC}) {
    left: 43%;
    margin-top: 342px;
  }
  @media (max-width: ${breakingPoints.bigTablet}) {
    left: 41%;
    margin-top: 340px;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 140px;
    left: 33%;
    margin-top: 295px;
  }
  @media (max-width: ${breakingPoints.mobile}) {
    left: 30%;
  }
`;
