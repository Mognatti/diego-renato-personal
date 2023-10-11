import styled from "styled-components";

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.big};
  margin: 4vh 0 2vh 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.highlight};
  text-align: justify;
`;

export const BannerImg = styled.img`
  width: 310px;
  margin-top: 4vh;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 4vh 0 0 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 23%;
  height: 200px;
  text-align: justify;
  gap: 1.5vh;
  background-color: transparent;
  padding: 16px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
`;

export const ItemTitle = styled.div`
  text-align: center;
  font-size: 1.4em;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 5px 0;
`;

export const ItemDesc = styled.div`
  text-align: justify;
`;

export const Banner = styled.img`
  width: 99vw;
  padding: 4vh 0;
`;
