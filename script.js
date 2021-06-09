
let perguntaAle, perguntaEscolha
const botaoIniciar = document.getElementById('btnI')
const botaoProximo = document.getElementById('proximoBtn')
const containerQuiz = document.getElementById('quizPrincipal')
const perguntaPrincipal = document.getElementById('perguntaJs')
const respostasBtn = document.getElementById('rsp')
const containerIniciarQuiz = document.getElementById('iniciarPrincipal')
const containerPrincipalQuiz = document.getElementById('principalQ')

botaoIniciar.addEventListener('click', iniciarQuiz)
botaoProximo.addEventListener('click', () => {
  
  perguntaEscolha++
  proximaPg()
})

function iniciarQuiz() {
    containerIniciarQuiz.style.display = "none";
    containerPrincipalQuiz.style.display = "block";
    perguntaAle = perguntas.sort(() => Math.random() - .5)
    perguntaEscolha = 0
    proximaPg()
  }

  document.querySelector('reiniciar').addEventListener('click', function(){
    window.location.reload();
    return false
  });

  function proximaPg() {
    mostrarPerguntas(perguntaAle[perguntaEscolha])
  }

  function mostrarPerguntas(pergunta) {
    perguntaPrincipal.innerText = pergunta.pergunta
  }

  const perguntas = [
    {
      pergunta: '1 + 1',
      respostas: [
        {text: '2', correct: true},
        {text: '4', correct: false},
        {text: '6', correct: false},
        {text: '8', correct: false}
      ]
    }
  ]