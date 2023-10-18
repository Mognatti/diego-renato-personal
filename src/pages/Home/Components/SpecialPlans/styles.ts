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

export const BannerImg = styled.img`
  width: 310px;
  transition: 350ms;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 270px;
  }
`;
