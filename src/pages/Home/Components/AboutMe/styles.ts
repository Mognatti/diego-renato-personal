import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;
  margin-top: 10vh;
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
