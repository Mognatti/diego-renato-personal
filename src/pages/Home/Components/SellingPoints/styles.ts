import { styled } from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

export const CheckIcon = styled(AiFillCheckCircle)`
  width: 200px;
  margin-left: -15px;
  color: ${(props) => props.theme.colors.primary};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: -2vh;
  height: 100vh;
  width: 100%;
  gap: 2vw;
  padding: 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  width: 330px;
  height: 475px;
  padding: 16px;
  gap: 2vh;
`;

export const OutlineDiv = styled.div`
  position: absolute;
  outline: 1px solid ${(props) => props.theme.colors.primary};
  top: 135%;
  height: 480px;
  width: 380px;
  opacity: 0.6;
  box-shadow: 0 0 20px ${(props) => props.theme.colors.primary};
`;

export const CardText = styled.p`
  margin: 0;
  line-height: 2em;
  font-size: ${(props) => props.theme.fontSize.highlight};
  color: ${(props) => props.theme.colors.text};
`;

export const SpanTest = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const Banner = styled.img`
  width: 99vw;
  opacity: 0.7;
`;
