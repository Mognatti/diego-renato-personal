import * as S from "./styles";

export default function CallToActionBanner() {
  return (
    <S.CallToActionDiv>
      <S.CallToActionText>
        Ficou com algumda dúvida? Entre em contato comigo!
      </S.CallToActionText>
      <S.CallToActionButtonSection>
        <a href="https://bit.ly/whatsapp_diego_renato_personal" target="_blank">
          <S.ImgBanner src="/images/whatsapp_banner_filled.png" />
        </a>
        <a
          href="https://www.instagram.com/diegorenatopersonal/"
          target="_blank"
        >
          <S.ImgBanner src="/images/Instagram_banner_filled.png" />
        </a>
      </S.CallToActionButtonSection>
    </S.CallToActionDiv>
  );
}
