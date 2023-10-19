import * as GS from "../../../../styles/reusable";
import CallToActionBanner from "../CallToActionBanner";
import * as S from "./styles";
export default function SpecialPlans() {
  const specialPlans = [
    {
      id: 1,
      title: "DR PREMIUM",
      desc: `
            Neste programa, você tem todos os benefícios da marca DR, como parceiros e direito a nutricionista mensalmente a sua disposição.
            Sabendo que, esses valores correspondem ao plano mensal e um contrato trimestral*, para que possamos deixar os resultados 
            mais fidedignos. Em relação a planos semestrais ou anuais poderemos negociar valores.`,
      days: `20 dias/mês`,
      week: "5x por semana",
      price: `Plano Mensal - R$ 1.700,00`,
      promo: `Plano Trimestral - R$ 1.600,00`,
      banner: (
        <S.BannerImg
          src="/images/drpremium_banner.png"
          alt="DR Premium Banner"
        />
      ),
      CTA: (
        <S.ButtonPremium
          src="/images/saiba_mais_premium.png"
          alt="clique aqui"
        ></S.ButtonPremium>
      ),
    },
    {
      id: 2,
      title: "DR treino em casa",
      desc: `
        Neste programa, você tem o acompanhamento online comigo por videoconferência e montagem de planilha de treinamento
        mensal. Fechando o pacote trimestral, você garante +1 acompanhamento presencoal/mês!`,
      days: `8 dias/mês`,
      week: "2x por semana",
      price: `Plano Mensal - R$600,00`,
      promo: `Plano Trimestral - R$ 580,00`,
      banner: (
        <S.BannerImg
          src="/images/dremcasa_banner.png"
          alt="DR em casa Banner"
        />
      ),
      CTA: (
        <S.Button
          src="/images/saiba_mais_DRemcasa.png"
          alt="clique aqui"
        ></S.Button>
      ),
    },
  ];

  return (
    <>
      <GS.Container>
        <GS.Title>Planos Especiais</GS.Title>
        {specialPlans.map((plan) => (
          <S.PlanContainer key={plan.id}>
            <S.PlanTitle>{plan.title}</S.PlanTitle>
            <S.PlanDesc>{plan.desc}</S.PlanDesc>
            <S.BannerContainer>
              <S.ButtonLink
                href="https://bit.ly/whatsapp_diego_renato_personal"
                target="_blank"
              >
                {plan.CTA}
              </S.ButtonLink>
              {plan.banner}
            </S.BannerContainer>
          </S.PlanContainer>
        ))}
      </GS.Container>
      <CallToActionBanner />
    </>
  );
}
