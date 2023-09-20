import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 5vw 0 5vw;
  height: 97vh;
`;

export const Title = styled.h1`
  font-weight: 400;
  margin: 0;
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const DivRow = styled.div`
  width: 100%;
  height: 5vh;
  opacity: 0.7;
  background-color: ${(props) => props.theme.colors.primary};
`;
