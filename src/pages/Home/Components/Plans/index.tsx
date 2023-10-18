import * as GS from "../../../../styles/reusable";
import PlanCard from "./Components/Card";
import * as S from "./styles";
export default function Plans() {
  const allPlans = [
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
            days: "4 dias de treino",
            regularity: "1x por semana",
            value: "R$ 450,00",
          },
          {
            id: 5,
            name: "Plus",
            days: "8 dias de treino",
            regularity: "2x por semana",
            value: "R$ 800,00",
          },
          {
            id: 6,
            name: "Exclusive",
            days: "12 dias de treino",
            regularity: "3x por semana",
            value: "R$ 1050,00",
          },
        ],
      },
    },
  ];

  return (
    <>
      <S.Container id="plans">
        <GS.Title>Planos - Personal Trainer</GS.Title>
        <S.Disclaimer>
          O resultado torna-se visível somente depois do esforço. Tendo em vista
          essa mentalidade, os planos forenecidos seguem o modelo
          <span style={{ color: "#96C83E" }}> Trimestral</span>. Caso você
          esteja ainda mais compromissado e apto para ingressar em um
          planejamento semestral ou anual, podemos negociar. Sendo assim, não
          hesite em me contactar. Vamos juntos!
        </S.Disclaimer>
        <S.Disclaimer>
          Os planos são dividos em duas categorias: Com atendimento nutricional
          ou sem atendimento nutricional. Caso opte pelo pacote mais completo,
          será acompanhando nos treinos por mim e a sua dieta será organizada
          pela Dra. Camila Mognatti, que possui mais de{" "}
          <span style={{ color: "#96C83E" }}>10 anos de experiência</span>!
        </S.Disclaimer>
        <S.List>
          {allPlans.map((item) => (
            <PlanCard key={item.type.title} {...{ item }} />
          ))}
        </S.List>
        <S.Disclaimer>
          *O pagamento pode ser feito à vista (dinheiro/ transferência bancária)
          ou dividir uma parte em dinheiro e outra no Cartão crédito. Além
          disso, podemos dividir em 3x Cartão de crédito + 5%
        </S.Disclaimer>
      </S.Container>
      <br />
      <br />
      <GS.DivRow />
    </>
  );
}
