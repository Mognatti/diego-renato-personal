import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 8vh;
  width: 100%;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 5vw;
  margin-left: 5vw;
`;

export const LogoImg = styled.img`
  width: 70px;
  padding: 0;
  margin: 0;
`;

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
`;

export const LinkWrapper = styled.div`
  width: 80px;
  display: flex;
  justify-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.action};
  transition: 350ms;
  &:hover {
    padding: 0 8px;
  }
`;
