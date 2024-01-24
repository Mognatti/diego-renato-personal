import useWindowScroll from "../../hooks/useWindowScroll";
import useWindowSize from "../../hooks/useWindowSize";
import { navLinks } from "./navLinks";
import * as S from "./styles";
import { useState } from "react";

export default function Header() {
  const [{ windowScroll, showScrollTop }] = useWindowScroll();
  const [{ windowSize }] = useWindowSize();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleHamburguerClick() {
    setShowMobileMenu((prev) => !prev);
  }

  function handleArrowClick() {
    window.scrollTo({ top: 0 });
  }

  return (
    <S.Container scrolling={windowScroll ? "true" : "false"}>
      <nav>
        <S.List>
          <S.LogoImg src="dr_logo.png" alt="logo" />
          {windowSize > 600 ? (
            <S.LinkDiv>
              {navLinks.map((link) => (
                <S.LinkWrapper key={link.id}>
                  <S.StyledLink href={link.to}>{link.label}</S.StyledLink>
                </S.LinkWrapper>
              ))}
            </S.LinkDiv>
          ) : (
            <div>
              <S.HamburguerIcon size="25" onClick={() => handleHamburguerClick()} show={showMobileMenu} />
              <S.MobileMenu show={showMobileMenu}>
                {navLinks.map((link) => (
                  <S.MobileMenuLinks key={link.id} href={link.to} onClick={() => setShowMobileMenu(false)}>
                    {link.label}
                  </S.MobileMenuLinks>
                ))}
              </S.MobileMenu>
            </div>
          )}
          <S.ArrowUpIcon size="20" onClick={() => handleArrowClick()} show={showScrollTop ? "true" : "false"} />
        </S.List>
      </nav>
    </S.Container>
  );
}
