import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  gap: 3vw;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px ${(props) => props.theme.colors.secondary};
  width: 30%;
  border-radius: 16px;
  padding: 8px;
  &:nth-of-type(2) {
    box-shadow: 0 0 15px ${(props) => props.theme.colors.primary};
  }
`;

export const CardHeader = styled.div`
  height: 70px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  padding: 8px;
`;

export const CardBody = styled.div`
  display: flex;
  text-align: justify;
  color: ${(props) => props.theme.colors.text};
  height: 350px;
  font-size: 1.3em;
  line-height: 180%;
  border-radius: 0 0 16px 16px;
  padding: 24px;
`;
export const Banner = styled.img`
  width: 99vw;
  opacity: 0.7;
`;
