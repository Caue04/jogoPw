let iniciar = document.querySelector(".iniciar")
let containerQuiz = document.querySelector(".containerQuiz")
let containerIniciar = document.querySelector(".containerIniciar")

iniciar.addEventListener("click", pularPagina);

function pularPagina() {
    containerIniciar.style.display = "none";
    containerQuiz.style.display = "block";
}
