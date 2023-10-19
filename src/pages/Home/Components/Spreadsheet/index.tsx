import useWindowSize from "../../../../hooks/useWindowSize";
import * as GS from "../../../../styles/reusable";
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
const changeBannerImageWidth = 700;
export default function SpreadSheet() {
  const [{ windowSize }] = useWindowSize();

  return (
    <>
      <GS.Container id="planilha">
        <GS.Title>Planilha Personalizada</GS.Title>
        <S.SubTitle>
          Transforme Seus Sonhos em Realidade: Sua Jornada Personalizada para o
          Corpo dos Seus Sonhos
        </S.SubTitle>
        <S.Content>
          <S.Text>
            Alcance um corpo mais saudável, atlético e em forma, levando em
            consideração todas as suas possíveis limitações! Seu treino levará
            em consideração tudo a sua rotina e seu histórico de saúde, visando
            alcançar o seu objetivo de forma rápida e segura!
          </S.Text>
          <S.BannerImg src="/images/drplanilha_banner.png" />
          <a
            href="https://bit.ly/whatsapp_diego_renato_personal"
            target="_blank"
          >
            <S.Buttom src="/images/saiba_mais_planilia.png" alt="clique aqui" />
          </a>
        </S.Content>
        <S.Text>
          Com a Planilha de Treino você tem a solução definitiva para conquistar
          seus objetivos de condicionamento físico, levando em consideração
          todas as suas limitações individuais.
        </S.Text>
        <S.List>
          {cardContent.map((item) => (
            <S.Item key={item.id}>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemDesc>{item.desc}</S.ItemDesc>
            </S.Item>
          ))}
        </S.List>
        <br />
      </GS.Container>
      <br />
      <S.Banner
        src={
          windowSize > changeBannerImageWidth
            ? "/images/diego_banner_edited.jpg"
            : "/images/diego_banner_edited_mobile.jpg"
        }
        alt="banner"
      />
    </>
  );
}
