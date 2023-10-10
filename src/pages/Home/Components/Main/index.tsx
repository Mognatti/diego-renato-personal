import * as S from "./styles";
import * as GS from "../../../../styles/reusable";
export default function Main() {
  return (
    <>
      <S.Container id="home">
        <S.TitleWrapper>
          <S.Title>
            <S.FirstName>Diego</S.FirstName> <S.LastName>Renato</S.LastName>
          </S.Title>
          <S.SubTitle>Treinamento especializado</S.SubTitle>
        </S.TitleWrapper>
        <S.SelfImage
          src="/images/diego_cross_arms_edited.png"
          alt="self_image"
        />
      </S.Container>
      <GS.DivRow />
    </>
  );
}
