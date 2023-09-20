import * as GS from "../../../../styles/reusable";
import PlanCard from "./Components/Card";
import * as S from "./styles";
export default function Plans() {
  const topPlans = [
    {
      type: {
        title: "Com atendimento nutricional",
        month: "Trimestral",
        plans: [
          {
            id: 1,
            name: "Básico",
            days: "4 dias de treino",
            regularity: "1x por semana",
            value: "R$ 450,00",
          },
          {
            id: 2,
            name: "Plus",
            days: "8 dias de treino",
            regularity: "2x por semana",
            value: "R$ 880,00",
          },
          {
            id: 3,
            name: "Exclusive",
            days: "12 dias de treino",
            regularity: "3x por semana",
            value: "R$ 1150,00",
          },
        ],
      },
    },
    {
      type: {
        title: "Sem atendimento nutricional",
        month: "Trimestral",
        plans: [
          {
            id: 4,
            name: "Básico",
            days: "4 dias",
            regularity: "1x por semana",
            value: "R$ 450,00",
          },
          {
            id: 5,
            name: "Plus",
            days: "8 dias",
            regularity: "2x por semana",
            value: "R$ 450,00",
          },
          {
            id: 6,
            name: "Exclusive",
            days: "12 dias",
            regularity: "3x por semana",
            value: "R$ 1050,00",
          },
        ],
      },
    },
  ];

  return (
    <GS.Container>
      <GS.Title>Planos</GS.Title>
      <div>
        <p>
          Os planos oferecidos são fornecidos pelos valores abaixo de forma
          trimestral. Caso tenha interesse em um plano mensal ou anual, podemos
          negociar, entáo não hesite em me chamar no whatsapp para cuidarmos da
          sua saúde o quanto antes!
        </p>
      </div>
      <S.List>
        {topPlans.map((item) => (
          <PlanCard key={item.type.title} {...{ item }} />
        ))}
      </S.List>
    </GS.Container>
  );
}

// 🏋🏻‍♂️Programa🏋🏽‍♀️
// DR PREMIUN

// Neste programa, você tem todos os benefícios da marca DR, como parceiros e direito a nutricionista mensalmente a sua disposição.

// 20 dias/mensais- R$ 1.700,00
// Plano Trimestral - R$ 1.600,00

// Sabendo que, esses valores correspondem ao plano mensal e um contrato trimestral*, para que possamos deixar os resultados mais fidedignos .
// 💫Em relação a planos semestrais ou anuais poderemos negociar valores.

// 🤳DRtreinoemcasa📳

// Neste programa, você tem o acompanhamento online comigo por videoconferência e montagem de planilha de treinamento mensal.

// Valor mensal
// 8 aulas/ 2x por semana
// R$ 600,00

// Valor trimestral
// 8 aulas/ 2x por semana + 1 acompanhamento presencial/mês
// R$ 580,00

// Planos de 12 aulas ou mais a negociar.

// 💱Pagamento pode ser feito:

// 1-à vista(dinheiro/ transferência bancária)
// 2- 1+2 ( dinheiro/ Cartão crédito)
// 3- 3x Cartão de crédito + 5%

// Agora qual seria o horário e dias da semana que você pretende treinar? 💪😀

// ❇️_Redes Sociais_✔️
// @diegorenatopersonal

// Diego Renato
// Cref: 6460 G/DF
// 📞(061)996036804
