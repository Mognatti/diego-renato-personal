import styled from "styled-components";
import { FaFingerprint, FaAppleAlt } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { BsClock } from "react-icons/bs";

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
  margin: 10vh 5vw 0 5vw;
`;

export const Image = styled.img`
  width: 450px;
  border-radius: 16px;
  box-shadow: 0 0 15px ${(props) => props.theme.colors.primary};
`;

export const Text = styled.p`
  margin: 0;
  padding-top: 2vh;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSize.highlight};
`;

export const List = styled.ul`
  display: flex;
  gap: 8vw;
  justify-content: center;
  align-items: center;
  margin-top: 12vh;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2vh 0;
  justify-content: center;
  align-items: center;
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
