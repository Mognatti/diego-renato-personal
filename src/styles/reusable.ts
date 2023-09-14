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
`;
