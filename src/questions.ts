type Question = {
  questionText: string;
  image: string;
  options: Option[];
};

type Option = {
  optionText: string;
  character: string;
};

export const questions: Question[] = [
  {
    questionText:
      "Quando uma pessoa te conta a história de um filme conhecido, que você assistiu mais de uma vez. O que você faz?",
    image: "https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/question-1.jpg",
    options: [
      { optionText: "Pratico a escuta ativa", character: "Paciêncio" },
      { optionText: "Não gosto, mas ouço", character: "Tolerany" },
      { optionText: "Preguiça de ouvir, mas vamos lá, né?", character: "Perseveroso" },
      { optionText: "Ouço porque quem está me contando quer se abrir e interagir", character: "Compaixudo" },
    ],
  },
  {
    questionText: "Você está na fila do banco há 2 horas",
    image: "https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/question-2.jpg",
    options: [
      { optionText: "Continuo aguardando a minha vez", character: "Paciêncio" },
      { optionText: "Fico super incomodado com as pessoas reclamando, mas tolero", character: "Tolerany" },
      { optionText: "Agora que eu fiquei todo esse tempo aqui, vou esperar até o final", character: "Perseveroso" },
      {
        optionText: "Também não deve ser fácil para o caixa que está aguentando todo mundo reclamar",
        character: "Compaixudo",
      },
    ],
  },
  {
    questionText: "No trânsito, a pessoa de trás buzina sem parar para você. Como você reage?",
    image: "https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/question-3.jpg",
    options: [
      { optionText: "O trânsito é isso mesmo. Isso não me afeta", character: "Paciêncio" },
      { optionText: "Fico extremamente irritado, mas é preciso suportar", character: "Tolerany" },
      { optionText: "Estou focando aonde devo chegar", character: "Perseveroso" },
      {
        optionText: "Ela não deve estar nos seus melhores dias. Acontece com qualquer pessoa",
        character: "Compaixudo",
      },
    ],
  },
  {
    questionText: "Quando você explica algo mais de uma vez e o seu (a sua) colega não entende. Como você reage?",
    image: "https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/question-4.jpg",
    options: [
      { optionText: "Explico mais uma vez", character: "Paciêncio" },
      {
        optionText: "Nem todo mundo pensa rápido como eu, mas preciso passar a minha informação",
        character: "Tolerany",
      },
      { optionText: "Conto até 10 e vamos lá... explico de novo", character: "Perseveroso" },
      {
        optionText: "Explico mais uma vez com muito prazer. Nem todo mundo entende de primeira o que a gente diz",
        character: "Compaixudo",
      },
    ],
  },
  {
    questionText:
      "Imagine que você está participando de uma prova de corrida em dupla, mas a sua dupla começa a sentir dores nas pernas e chega em seu limite. Qual das opções abaixo você mais se identifica?",
    image: "https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/question-5.jpg",
    options: [
      {
        optionText: "Procuro me manter calmo, mesmo sabendo que não conseguiremos finalizar a prova",
        character: "Paciêncio",
      },
      {
        optionText: "Quero terminar a prova e não escondo o meu objetivo, mas se não tiver jeito... é o que temos",
        character: "Tolerany",
      },
      { optionText: "Incentivo a minha dupla. A gente precisa seguir, mesmo com dores", character: "Perseveroso" },
      {
        optionText: "Desistimos da prova. Cada pessoa tem o seu limite",
        character: "Compaixudo",
      },
    ],
  },
  {
    questionText: "Um (a) colega está triste por um motivo que os demais julgam ser infantil. O que você faz?",
    image: "https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/question-6.jpg",
    options: [
      {
        optionText: "Entendo que o tempo vai passar e tudo vai ficar bem",
        character: "Paciêncio",
      },
      {
        optionText: "Não gosto de me aproximar de pessoas tristes, mas mostro disposição para uma possível conversa",
        character: "Tolerany",
      },
      { optionText: "Digo para o (a) colega que é preciso se esforçar para ficar bem", character: "Perseveroso" },
      {
        optionText: "Acolho e ofereço um ombro amigo. Não estamos bem todos os dias",
        character: "Compaixudo",
      },
    ],
  },
  {
    questionText:
      "Imagine que você está praticando o seu esporte favorito. Outra pessoa te empurra deslealmente, mas, em seguida, ela mesma cai e machuca um dos braços. Qual a sua primeira reação?",
    image: "https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/question-7.jpg",
    options: [
      {
        optionText: "Mesmo sendo empurrado, não me sinto ofendido e faço o que deve ser feito",
        character: "Paciêncio",
      },
      {
        optionText: "Ajudo, mas deixo claro que não gostei da conduta de quem me empurrou",
        character: "Tolerany",
      },
      {
        optionText: "Estou focado no esporte, sendo empurrado ou não. Mas como a pessoa se machucou, paro a jogada",
        character: "Perseveroso",
      },
      {
        optionText: "Independente do que tenha acontecido é preciso oferecer ajuda",
        character: "Compaixudo",
      },
    ],
  },
];
