import useWindowScroll from "../../hooks/useWindowScroll";
import { navLinks } from "./navLinks";
import * as S from "./styles";

export default function Header() {
  const [{ windowScroll, showScrollTop }] = useWindowScroll();

  function handleClick() {
    window.scrollTo({ top: 0 });
  }

  return (
    <S.Container scrolling={windowScroll ? "true" : "false"}>
      <nav>
        <S.List>
          <S.LogoImg src="dr_logo.png" alt="logo" />
          <S.LinkDiv>
            {navLinks.map((link) => (
              <S.LinkWrapper key={link.id}>
                <S.StyledLink href={link.to}>{link.label}</S.StyledLink>
              </S.LinkWrapper>
            ))}
          </S.LinkDiv>
          <S.ArrowUpIcon
            size="20"
            onClick={() => handleClick()}
            show={showScrollTop ? "true" : "false"}
          />
        </S.List>
      </nav>
    </S.Container>
  );
}
