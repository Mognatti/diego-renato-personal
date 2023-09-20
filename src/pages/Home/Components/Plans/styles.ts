import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PlanContainer = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.big};
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
`;

export const PlanList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 8px;
  width: 270px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0 0 50px #282828;
  &:nth-of-type(2) {
    height: 350px;
    width: 300px;
    z-index: 10;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.highlight};
  font-weight: 400;
  margin: 24px 0 18px 0;
`;

export const CardPrice = styled.h1`
  margin: 12px 0;
`;

export const CardCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 18px;
`;

export const CardData = styled.p`
  margin: 0;
  padding: 6px;
  border-bottom: 1px solid #fff4;
  width: 160px;
  text-align: center;
  font-size: 1.15em;
`;
