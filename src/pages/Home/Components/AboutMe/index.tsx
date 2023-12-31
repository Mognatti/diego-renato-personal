import * as GS from "../../../../styles/reusable";
import * as S from "./styles";
export default function AboutMe() {
  const text = [
    {
      id: 1,
      desc: `Sou Diego Renato, personal trainer com mais de 14 anos de
    experiência. Especialista em treinamento funcional e treinamento
    para grupos especiais, como cardiopatas, hipertensos e diabéticos.
    Sou capaz de formar o planejamento ideal para o alcance dos seus
    objetivos de maneira saudável e eficiente, sem que você precise se
    expor a riscos desnecessários.`,
    },
    {
      id: 2,
      desc: `Meu foco é levar para você a melhor experiência possível no seu
      treinamento, seja presencialmente ou atráves das planilhas de
      treino, vamos organizar a sua rotina para que você leve uma vida
      mais saudável. Tenho certeza que tenho o plano ideal que se adeque a
      sua rotina, seja com os pacotes online ou presecial. A minha missão
      é que você conquiste o seu objetivo!`,
    },
  ];

  const SellingPoints = [
    {
      id: 1,
      icon: <S.FingerIcon size="40" />,
      desc: `Treinamento Personalizado`,
    },
    {
      id: 2,
      icon: <S.HealthIcon size="40" />,
      desc: `Desenvolvimento Saudável`,
    },
    {
      id: 3,
      icon: <S.ClockIcon size="40" />,
      desc: `Flexibilidade de horários`,
    },
    {
      id: 4,
      icon: <S.FruitIcon size="40" />,
      desc: `Atendimento nutricional`,
    },
  ];

  return (
    <>
      <S.NewContainer id="sobre-mim">
        <GS.Title>Conheça o seu treinador</GS.Title>
        <S.ContentContainer>
          <S.Image
            src="/images/aboute_me_pic.jpg"
            alt="profile_picture"
            aria-label="imagem do professor"
          />

          <div>
            {text.map((item) => (
              <S.Text key={item.id}>{item.desc}</S.Text>
            ))}

            <S.Text style={{ textAlign: "end", color: "#96c83e" }}>
              Vamos juntos!
            </S.Text>
          </div>
        </S.ContentContainer>
        <S.IconList>
          {SellingPoints.map((item) => (
            <S.Icon key={item.id}>
              {item.icon}
              {item.desc}
            </S.Icon>
          ))}
        </S.IconList>
      </S.NewContainer>
      <GS.DivRow />
    </>
  );
}
