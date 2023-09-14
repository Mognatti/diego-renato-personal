import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 5vw;
  align-items: center;
  height: 91vh;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: ${(props) => props.theme.fontSize.title};
`;

export const SelfImage = styled.img`
  height: 730px;
  margin-right: 5vw;
  opacity: 0.7;
`;
