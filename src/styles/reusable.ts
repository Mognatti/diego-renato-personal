import { styled } from "styled-components";
import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { breakingPoints } from "./theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 5vw 0 5vw;
`;

export const Title = styled.h1`
  font-weight: 400;
  margin: 0;
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  @media (max-width: ${breakingPoints.smallPC}) {
    font-size: 3em;
  }
  @media (max-width: ${breakingPoints.bigPhone}) {
    font-size: ${(props) => props.theme.fontSize.big};
  }
`;

export const DivRow = styled.div`
  width: 100%;
  height: 5vh;
  opacity: 0.7;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const InstaLogo = styled(BiLogoInstagram)``;
export const WhatsLogo = styled(BiLogoWhatsapp)``;
export const EmailLogo = styled(AiOutlineMail)``;
