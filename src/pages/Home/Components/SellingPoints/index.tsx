import * as GS from "../../../../styles/reusable";
import CallToActionBanner from "../CallToActionBanner";
import * as S from "./styles";

export default function SellingPoints() {
  const data = [
    {
      id: 1,
      title: "Treinamento Individualizado",
      desc: `Estarei ao seu lado durante o treino nos dias de sua preferência, fornecendo um atendimento presencial individualizado.
      Nos dias em que não estivemos juntos, você poderá seguir o acompanhamento indireto por meio de planilha prescrita
      exclusiva para o seu objetivo e biotipo`,
    },
    {
      id: 2,
      title: `DR Premium`,
      desc: `Um programa exlusivo e completo, no qual você tem todos os benefícios da marca DR, como parceiros e direito a nutricionista
       mensalmente a sua disposição. Nesse plano você terá uma equipe de profissionais que irão te ajudar durante toda a sua jornada! `,
    },
    {
      id: 3,
      title: "Atendimento Nutricional",
      desc: `No ato do contrato você recebe um atendimento nutricional presencial gratuito! Em cojunto a isso, você irá garantir seu 
      acompanhamento nutricional com plano alimentar de 30 dias!`,
    },
  ];

  return (
    <>
      <GS.Container>
        <br />
        <GS.Title>Diferenciais</GS.Title>
        <S.List>
          {data.map((item) => (
            <S.Card key={item.id}>
              <S.CardHeader>{item.title}</S.CardHeader>
              <S.CardBody>{item.desc}</S.CardBody>
            </S.Card>
          ))}
        </S.List>
        <CallToActionBanner />
      </GS.Container>
      <br />
      <br />
      <S.Banner src="/images/placeholder_banner.png" alt="workout_banner" />
    </>
  );
}
