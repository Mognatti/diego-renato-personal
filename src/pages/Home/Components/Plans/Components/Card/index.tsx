import * as S from "../../styles";

export interface PlanCardProps {
  item: {
    type: {
      title: string;
      month: string;
      plans: {
        id: number;
        name: string;
        days: string;
        regularity: string;
        value: string;
      }[];
    };
  };
}

export default function PlanCard({ item }: PlanCardProps) {
  return (
    <S.PlanContainer>
      <S.Title>{item.type.title}</S.Title>
      <S.PlanList>
        {item.type.plans.map((plan) => (
          <S.Card key={plan.id}>
            <S.CardTitle>{plan.name}</S.CardTitle>
            <S.CardPrice>
              {plan.value}
              <span style={{ fontSize: "1rem" }}>/aula</span>
            </S.CardPrice>
            <S.CardCenterDiv>
              <S.CardData>{plan.days}</S.CardData>
              <S.CardData>{plan.regularity}</S.CardData>
              <S.CardData>*Plano trimestral</S.CardData>
            </S.CardCenterDiv>
          </S.Card>
        ))}
      </S.PlanList>
    </S.PlanContainer>
  );
}
