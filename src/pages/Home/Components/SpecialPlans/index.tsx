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
          src="/images/DRPremuim_Banner.png"
          alt="DR Premium Banner"
        />
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
          src="/images/DR_em_casa_Banner.png"
          alt="DR em casa Banner"
        />
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
            {plan.banner}
          </S.PlanContainer>
        ))}
      </GS.Container>
      <CallToActionBanner />
    </>
  );
}

// Pagamento pode ser feito: 1-à vista(dinheiro/ transferência bancária) 2- 1+2 ( dinheiro/ Cartão crédito) 3- 3x Cartão de crédito + 5%
