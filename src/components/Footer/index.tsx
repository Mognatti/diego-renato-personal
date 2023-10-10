import * as S from "./styles";
import * as GS from "../../styles/reusable";
export default function Footer() {
  const contactInfo = [
    {
      id: 1,
      label: "(61) 996036804",
      img: <GS.WhatsLogo size="25" />,
    },
    {
      id: 2,
      label: "drdiegorenato@gmail.com",
      img: <GS.EmailLogo size="25" />,
    },
    {
      id: 3,
      label: "diegorenatopersonal",
      img: <GS.InstaLogo size="25" />,
    },
  ];

  return (
    <S.Footer>
      <S.ContactSection>
        <S.FooterTitle>Contatos</S.FooterTitle>
        {contactInfo.map((item) => (
          <S.ContanctInfo key={item.id}>
            {item.img}
            {item.label}
          </S.ContanctInfo>
        ))}
      </S.ContactSection>
      <S.CompanySection>
        <S.FooterLogo src="/dr_logo.png" />
        <S.ContanctInfo>Diego Renato Personal</S.ContanctInfo>
        <S.PersonalInfo>CREF: 6460 G/DF</S.PersonalInfo>
      </S.CompanySection>
    </S.Footer>
  );
}
