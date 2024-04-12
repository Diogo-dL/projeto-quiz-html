const perguntas = [
  {
    pergunta: "Qual tag é usada para criar uma lista não ordenada em HTML?",
    respostas: [
      "ul",
      "li",
      "ol",
    ],
    correta: 0
  },
  {
    pergunta: "Qual elemento HTML é usado para criar um link?",
    respostas: [
      "link",
      "href",
      "a",
    ],
    correta: 2
  },
  {
    pergunta: "Qual atributo HTML é usado para especificar o texto alternativo para uma imagem, se a imagem não puder ser exibida?",
    respostas: [
      "alt",
      "src",
      "href",
    ],
    correta: 0
  },
  {
    pergunta: "Qual elemento HTML é usado para criar um parágrafo?",
    respostas: [
      "p",
      "para",
      "paragraph",
    ],
    correta: 0
  },
  {
    pergunta: "Qual tag HTML é usada para definir uma tabela?",
    respostas: [
      "table",
      "tr",
      "td",
    ],
    correta: 0
  },
  {
    pergunta: "Qual atributo HTML é usado para especificar o endereço de destino de um link?",
    respostas: [
      "url",
      "href",
      "src",
    ],
    correta: 1
  },
  {
    pergunta: "Qual tag HTML é usada para criar uma lista ordenada?",
    respostas: [
      "ul",
      "li",
      "ol",
    ],
    correta: 2
  },
  {
    pergunta: "Qual elemento HTML é usado para criar uma linha em uma tabela?",
    respostas: [
      "row",
      "tr",
      "td",
    ],
    correta: 1
  },
  {
    pergunta: "Qual atributo HTML é usado para definir o título de uma página da web?",
    respostas: [
      "title",
      "head",
      "body",
    ],
    correta: 0
  },
  {
    pergunta: "Qual tag HTML é usada para criar um cabeçalho de uma tabela?",
    respostas: [
      "header",
      "th",
      "tr",
    ],
    correta: 1
  }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


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

    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
}