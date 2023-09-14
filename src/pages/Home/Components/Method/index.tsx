import * as GS from "../../../../styles/reusable";
import * as S from "./styles";

export default function Method() {
  return (
    <GS.Container>
      <GS.Title>Diferenciais</GS.Title>
      <div>
        <S.CheckIcon />
        Atendimento individual presencial + acompanhamento indireto por meio de
        planilha prescritas nos dias que estiver ausente.{" "}
      </div>
      <div>
        <S.CheckIcon />
        No ato do contrato o aluno ganhará inteiramente grátis 1 atendimento
        (NUTRICIONAL)+ acompanhamento, com plano alimentar de 30 dias. (*) e
        (plano de 12 aulas ou planejamento trimestral de 8 aulas)
      </div>
      <div>
        <S.CheckIcon />
        Avaliação física e avaliação foto imagem. (*) (planos de 12 aulas e DR
        PREMIUN)
      </div>
    </GS.Container>
  );
}
