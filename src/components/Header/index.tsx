import { navLinks } from "./navLinks";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
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
        </S.List>
      </nav>
    </S.Container>
  );
}
