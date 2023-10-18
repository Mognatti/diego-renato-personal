import { styled } from "styled-components";
import { breakingPoints } from "../../styles/theme";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  border-top: 2px solid ${(props) => props.theme.colors.primary};
  margin-top: 5vh;
  padding: 4vh;
  height: fit-content;
  @media (max-width: ${breakingPoints.bigPhone}) {
    margin-top: 2vh;
    padding: 2vw;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterTitle = styled.h4`
  font-weight: 400;
  margin: 8px;
  color: ${(props) => props.theme.colors.primary};
`;

export const ContanctInfo = styled.p`
  margin: 8px;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  @media (max-width: ${breakingPoints.bigPhone}) {
    margin: 4px;
    gap: 4px;
    font-size: 0.8em;
  }
`;

export const PersonalInfo = styled.p`
  margin: 5px;
  @media (max-width: ${breakingPoints.bigPhone}) {
    margin: 0;
  }
`;

export const FooterLogo = styled.img`
  width: 80px;
  @media (max-width: ${breakingPoints.bigPhone}) {
    width: 70px;
  }
`;
