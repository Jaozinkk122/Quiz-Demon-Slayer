const perguntas = [
    {
        pergunta: "Qual é o nome do protagonista de Demon Slayer?",
      respostas: [
        "Tanjiro Kamado",
        "Zenitsu Agatsuma",
        "Inosuke Hashibira"
      ],
      correta: 0 // A resposta correta é "Tanjiro Kamado"
    },
    {
     pergunta: "Quem é o Hashira da Respiração do Fogo?",
      respostas: [
        "Gyomei Himejima",
        "Sanemi Shinazugawa",
        "Kyojuro Rengoku"
      ],
      correta: 2 // A resposta correta é "Kyojuro Rengoku"
    },
    {
     pergunta: "Qual é o nome do mestre dos Hashiras?",
      respostas: [
        "Kagaya Ubuyashiki",
        "Muzan Kibutsuji",
        "Urokodaki Sakonji"
      ],
      correta: 0 // A resposta correta é "Kagaya Ubuyashiki"
    },
    {
     pergunta: "Qual é a espada de Tanjiro?",
      respostas: [
        "Nichirin",
        "Tsunemasa",
        "Kokushibo"
      ],
      correta: 0 // A resposta correta é "Nichirin"
    },
    {
       pergunta: "Qual é o nome da respiração de Inosuke?",
      respostas: [
        "Respiração da Serpente",
        "Respiração da Fera",
        "Respiração do Porco"
      ],
      correta: 2 // A resposta correta é "Respiração do Porco""
    },
    {
       pergunta: "Qual é a missão dos caçadores de demônios em Demon Slayer?",
      respostas: [
        "Capturar demônios vivos",
        "Exterminar demônios",
        "Negociar com demônios"
      ],
      correta: 1 // A resposta correta é "Exterminar demônios"
    },
    {
      pergunta: "Qual é a missão dos caçadores de demônios em Demon Slayer?",
      respostas: [
        "Capturar demônios vivos",
        "Exterminar demônios",
        "Negociar com demônios"
      ],
      correta: 1 // A resposta correta é "Exterminar demônios"
    },
    {
   pergunta: "Qual é o nome do protagonista de Demon Slayer?",
      respostas: [
        "Tanjiro Kamado",
        "Zenitsu Agatsuma",
        "Inosuke Hashibira"
      ],
      correta: 0 // A resposta correta é "Tanjiro Kamado"
    },
    {
   pergunta: "Qual é o nome da irmã de Tanjiro que foi transformada em demônio?",
      respostas: [
        "Kanao Tsuyuri",
        "Nezuko Kamado",
        "Shinobu Kocho"
      ],
      correta: 1 // A resposta correta é "Nezuko Kamado"
    },
    {
      pergunta: "Qual é o nome da irmã adotiva de Tanjiro?",
      respostas: [
        "Kanao Tsuyuri",
        "Mitsuri Kanroji",
        "Shinobu Kocho"
      ],
      correta: 2 // A resposta correta é "Shinobu Kocho"
    }
  ];
  
  
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  //fazer aparecer a resposta
  quizItem.querySelector('dl dt').remove()
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  
  