import { styled } from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  border-top: 2px solid ${(props) => props.theme.colors.primary};
  margin-top: 5vh;
  padding: 4vh;
  height: 15vh;
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
`;

export const PersonalInfo = styled.p`
  margin: 5px;
`;

export const FooterLogo = styled.img`
  width: 80px;
`;
