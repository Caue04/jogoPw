//aqui são as var principais do jogo, contendo o turno, x na matriz
//o na matriz e as possibilidades de vitorias no jogo 
var pontosX = 0;
var pontosO = 0;
var pontoEmpate = 0;
var turno = 0;
var x = [];
var o = [];
var vitoriasJg = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

//aqui é para caso ocorrer um click no elemento "a1" ou "b2" ou "c3" por exemplo
//o click vai chamar uma função que esta definida depois do click

document.getElementById("a1").addEventListener("click", checarA1);
document.getElementById("a2").addEventListener("click", checarA2);
document.getElementById("a3").addEventListener("click", checarA3);
document.getElementById("b1").addEventListener("click", checarB1);
document.getElementById("b2").addEventListener("click", checarB2);
document.getElementById("b3").addEventListener("click", checarB3);
document.getElementById("c1").addEventListener("click", checarC1);
document.getElementById("c2").addEventListener("click", checarC2);
document.getElementById("c3").addEventListener("click", checarC3);

//aqui são as 9 divs que compoem o tabuleiro e quando ocorrer evento de click
//ira chamar uma dessas funçoes verificando se foi o turno 1 ou 0 com para adicionar
//no tabuleiro a peça do turno
//turno 0 = peça X
//turno 1 = peça O

function checarA1() {
    if (document.getElementById("a1").innerHTML ==="") {
        
        if (turno === 0) {
            document.getElementById("a1").innerHTML = "X";
            turno = 1;
            x.push(1);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("a1").innerHTML = "O";
            turno = 0;
            o.push(1);
            verificarVencedor(o);
        }
    }
}

function checarA2() {
    if (document.getElementById("a2").innerHTML ==="") {
       
        if (turno === 0) {
            document.getElementById("a2").innerHTML = "X";
            turno = 1 ;
            x.push(2);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("a2").innerHTML = "O";
            turno = 0;
            o.push(2);
            verificarVencedor(o);
        }
    }
}

function checarA3() {
    if (document.getElementById("a3").innerHTML ==="") {
        
        if (turno === 0) {
            document.getElementById("a3").innerHTML = "X";
            turno = 1;
            x.push(3);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("a3").innerHTML = "O";
            turno = 0;
            o.push(3);
            verificarVencedor(o);
        }
    }
}

function checarB1() {
    if (document.getElementById("b1").innerHTML ==="") {
        
        if (turno === 0) {
            document.getElementById("b1").innerHTML = "X";
            turno = 1;
            x.push(4);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("b1").innerHTML = "O";
            turno = 0;
            o.push(4);
            verificarVencedor(o);
        }
    }
}

function checarB2() {
    if (document.getElementById("b2").innerHTML ==="") {
        
        if (turno === 0) {
            document.getElementById("b2").innerHTML = "X";
            turno = 1;
            x.push(5);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("b2").innerHTML = "O";
            turno = 0;
            o.push(5);
            verificarVencedor(o);
        }
    }
}

function checarB3() {
    if (document.getElementById("b3").innerHTML ==="") {
        
        if (turno === 0) {
            document.getElementById("b3").innerHTML = "X";
            turno = 1;
            x.push(6);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("b3").innerHTML = "O";
            turno = 0;
            o.push(6);
            verificarVencedor(o);
        }
    }
}

function checarC1() {
    if (document.getElementById("c1").innerHTML ==="") {
        
        if (turno === 0) {
            document.getElementById("c1").innerHTML = "X";
            turno = 1;
            x.push(7);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("c1").innerHTML = "O";
            turno = 0;
            o.push(7);
            verificarVencedor(o);
        }
    }
}

function checarC2() {
    if (document.getElementById("c2").innerHTML ==="") {
        
        if (turno === 0) {
            document.getElementById("c2").innerHTML = "X";
            turno = 1;
            x.push(8);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("c2").innerHTML = "O";
            turno = 0;
            o.push(8);
            verificarVencedor(o);
        }
    }
}

function checarC3() {
    if (document.getElementById("c3").innerHTML ==="") {
        
        if (turno === 0) {
            document.getElementById("c3").innerHTML = "X";
            turno = 1;
            x.push(9);
            verificarVencedor(x);
        }
        else if (turno === 1) {
            document.getElementById("c3").innerHTML = "O";
            turno = 0;
            o.push(9);
            verificarVencedor(o);
        }
    }
}

//essa função é para verificar se tem um vencedor no jogo percorrendo o array

function verificarVencedor(jogador) {
    var cont = 0;
    for (var i = 0; i < vitoriasJg.length; i++) {
        for (var k = 0; k < vitoriasJg[i].length; k++) {
            for (var j = 0; j < jogador.length; j++) {
                if (vitoriasJg[i][k] === jogador[j]) {
                    cont++;
                    if (cont === 3 && turno === 1) {
                        alert("X GANHOU !!!!");
                        pontosX++;
                        document.getElementById("pontoX").textContent = pontosX;
                    }
                    else if (cont === 3 && turno === 0) {
                        alert("O GANHOU !!!!");
                        pontosO++;
                        document.getElementById("pontoO").textContent = pontosO;
                    }
                }
            }
        }
        cont = 0;
    }

    if (x.length + o.length === 9) {
        alert("DEU VELHA !!!!");
        pontoEmpate++;
        document.getElementById("pontoEmpate").textContent = pontoEmpate;
    }
}

//função reiniciar para zerar se tiver algo no html no id selecionado
//e zerar as posições "x" e "o" tambem retornando o turno para o 0

function reiniciar() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    x = [];
    o = [];
    turno = 0;
}

function pontuacaoReset() {
    document.getElementById("pontoX").innerHTML = "0";
    document.getElementById("pontoO").innerHTML = "0";
    document.getElementById("pontoEmpate").innerHTML = "0"
    pontosO=0;
    pontosX=0;
    pontoEmpate=0;
  }
