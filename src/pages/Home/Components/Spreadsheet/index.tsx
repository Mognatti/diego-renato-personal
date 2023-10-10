import * as GS from "../../../../styles/reusable";
import CallToActionBanner from "../CallToActionBanner";
import * as S from "./styles";

const cardContent = [
  {
    id: 1,
    title: "Personalização total",
    desc: `A planilha é criada sob medida para você. Considero seus
    objetivos específicos em relação ao corpo que deseja alcançar,
    seja ganhar músculos, perder peso, tonificar-se ou melhorar sua
    resistência cardiovascular`,
  },
  {
    id: 2,
    title: "Flexibilidade Horária",
    desc: `Liberdade para malhar na hora que quiser! Com a planilha de treino você pode treinar quando for mais conveniente para você, 
    sem se preocupar com horários fixos de academia, mas com a garantia de um treino montado especificamente para você.`,
  },
  {
    id: 3,
    title: "Orientação Profissional",
    desc: `Seu treinamento será elaborado por um profissional experiente, que entende a ciência por trás do 
    condicionamento físico e a importância da segurança. Você terá acesso a um plano de exercícios cuidadosamente projetado.
    `,
  },
];

export default function SpreadSheet() {
  return (
    <GS.Container id="planilha">
      <GS.Title>Planilha Personalizada</GS.Title>
      <S.SubTitle>
        Transforme Seus Sonhos em Realidade: Sua Jornada Personalizada para o
        Corpo dos Seus Sonhos
      </S.SubTitle>
      <S.Content>
        <S.Text>
          Alcance um corpo mais saudável, atlético e em forma, levando em
          consideração todas as suas possíveis limitações! Seu treino levará em
          consideração tudo a sua rotina e seu histórico de saúde, visando
          alcançar o seu objetivo de forma rápida e segura!
        </S.Text>
        <S.BannerImg src="/images/DR_Planilha.png" />
      </S.Content>
      <S.Text>
        Com a Planilha de Treino você tem a solução definitiva para conquistar
        seus objetivos de condicionamento físico, levando em consideração todas
        as suas limitações individuais.
      </S.Text>
      <div>
        <S.List>
          {cardContent.map((item) => (
            <S.Item key={item.id}>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemDesc>{item.desc}</S.ItemDesc>
            </S.Item>
          ))}
        </S.List>
      </div>
      <CallToActionBanner />
    </GS.Container>
  );
}

// R$ 180,00 -> Video chamada para anamnese + planilha
// Por que nossa planilha é especial?

// Os Benefícios da Nossa Planilha

// Resultados Garantidos: Com um plano de treinamento personalizado, você estará no caminho certo para alcançar seus objetivos mais rapidamente do que jamais imaginou.

// Redução de Lesões: Ao considerar suas limitações, você pode evitar lesões e treinar de forma mais segura e eficaz.

// Motivação Constante: Com um programa de exercícios variado e adaptado às suas necessidades, você ficará sempre motivado a continuar.

// Conveniência: Adequamos seu treinamento ao seu horário, tornando mais fácil manter o compromisso com a sua saúde.

// Apoio Profissional: Conte com o suporte de nossos profissionais sempre que tiver dúvidas ou precisar de ajustes no seu plano de treino.

// Não espere mais para transformar sua vida e alcançar o corpo dos seus sonhos. Nossa Planilha de Treino de Academia Personalizada é a chave para o sucesso. Invista em si mesmo, em sua saúde e bem-estar.

// Junte-se a nós e comece sua jornada para um corpo mais saudável e confiante hoje mesmo. Não deixe que limitações o impeçam de alcançar seus objetivos - deixe-nos ajudá-lo a superá-las. Entre em contato conosco agora para começar essa emocionante jornada em direção ao corpo dos seus sonhos!
