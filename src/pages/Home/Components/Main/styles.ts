import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 5vw;
  align-items: center;
  height: 92vh;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 400;
  margin: 0;
  font-size: 5.5em;
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
  font-size: ${(props) => props.theme.fontSize.big};
`;

export const SelfImage = styled.img`
  height: 728px;
  opacity: 0.7;
`;
