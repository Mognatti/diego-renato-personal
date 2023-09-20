import * as GS from "../../../../styles/reusable";
import * as S from "./styles";

const itens = [
  {
    id: 1,
    text: "<span style='color: #96C83E'>Atendimento individualizado e presencial na sua academia de confiança.</span> <br /> <div style='display: flex; justify-content: center'>+</div>  Nos dias que for treinar sozinho, você ainda pode contar com acompanhamento indireto através da sua planilha personalizada para o seu objetivo!",
  },
  {
    id: 2,
    text: `<span style='color: #96C83E'>No ato do contrato o aluno ganhará inteiramente grátis 1 atendimento
    nutricional com a Dra. Camila Mognatti.</span> <div style='display: flex; justify-content: center'>+</div> acompanhamento com plano alimentar de 30 dias e poderá
    optar por um plano de 12 aulas ou por um planejamento trimestral de 8
    aulas.`,
  },
  {
    id: 3,
    text: "<span style='color: #96C83E'>Avaliação física e avaliação foto imagem. Planos de 12 aulas e DR Premium!</span> <br/> <br/><span>Com o DR Premium você tem todos os benefícios da marca DR, podendo contar com nossos parceiros e direito a nutricionista mensalmente a sua disposição. </span>",
  },
];

export default function SellingPoints() {
  return (
    <>
      <GS.Container>
        <br />
        <GS.Title>Diferenciais</GS.Title>
        <S.List>
          {itens.map((item) => (
            <S.Card key={item.id}>
              <S.CheckIcon size="40" />
              <S.OutlineDiv></S.OutlineDiv>
              <S.CardText
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></S.CardText>
            </S.Card>
          ))}
        </S.List>
      </GS.Container>
      <S.Banner src="/images/placeholder_banner.png" alt="workout_banner" />
    </>
  );
}
