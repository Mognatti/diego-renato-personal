import { styled } from "styled-components";
import { BsArrowUp } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { breakingPoints } from "../../styles/theme";

export const Container = styled.div<{ scrolling: string }>`
  display: flex;
  height: 8vh;
  width: 100%;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${(props) => (props.scrolling === "true" ? `#121212` : "transparent")};
  z-index: 9999;
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
  width: 100px;
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.action};
  transition: 350ms;
  &:hover {
    padding: 0 8px;
  }
`;

export const ArrowUpIcon = styled(BsArrowUp)<{ show: string }>`
  cursor: ${(props) => (props.show === "true" ? "pointer" : "default")};
  position: absolute;
  right: 3%;
  color: ${(props) => props.theme.colors.primary};
  transition: 350ms;
  opacity: ${(props) => (props.show === "true" ? 1 : 0)};
  &:hover {
    transform: scale(1.3);
  }
`;

export const HamburguerIcon = styled(RxHamburgerMenu)<{ show: boolean }>`
  color: ${(props) => (props.show ? `${props.theme.colors.background}` : `${props.theme.colors.primary}`)};
  position: fixed;
  top: 24px;
  transition: 350ms;
  left: ${(props) => (props.show ? "120px" : "100px")};
  @media (max-width: ${breakingPoints.mobile}) {
    top: 18px;
  }
`;

export const MobileMenu = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  gap: 1vh 0;
  margin-top: 12svh;
  margin-left: -1svw;
  background-color: ${(props) => props.theme.colors.primary};
  width: 130px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 15px ${(props) => props.theme.colors.secondary};
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakingPoints.mobile}) {
    margin-left: 2vw;
    margin-top: 12vh;
  }
`;

export const MobileMenuLinks = styled.a`
  color: ${(props) => props.theme.colors.background};
  margin-left: 10vw;
  width: 85px;
  text-align: center;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    width: 100%;
    height: 5px;
    border-bottom: 1px solid;
  }
  &:last-of-type {
    &::after {
      border: none;
    }
  }
`;
