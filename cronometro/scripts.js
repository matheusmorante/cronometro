// criando variaveis para usar-las globalmente dentro das funções
var display = document.getElementById('display');
var interval;
var seconds = 0;
var minutes = 0;
var hours = 0;
var interval = null;
var timer_history = document.getElementById('timer_history');


/* função para incrementar '0' ao elementos númericos do crônometro
que forem menores que 10 */
function Zero(number) {
    if (number < 10) {
        return ('0' + number)
    } else {
        return (number)
    }
}

/* A função Count() irá incrementar os segundos, minutos e horas, com condições 
definidas de forma a simular uma contagem de tempo. A função Count() é executada
 em intervalo de 1 segundo através função global setInterval() chamada pela função 
 Start().  */
function Count() {
    seconds++;

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes === 60) {
        hours++;
        minutes = 0;
    }

    display.innerText = Zero(hours) + ':' + Zero(minutes) + ':' + Zero(seconds);
}

/* A função Start() é executado ao clicar no botão 'Início', ela verifica se não há
outra contagem sendo feita para então iniciar de fato uma contagem */
function Start() {
    if (interval === null) {
        interval = setInterval(Count, 1000);
        console.log('Cronômetro iniciado');
    }
}

/* A Função Pause() será executada quando o botão 'Pause' for clicado, ela chamará a função 
Clearinterval() que cancelará a contagem, no entanto sem zerar os valores */
function Pause() {
    clearInterval(interval);
    interval = null;
    console.log('Cronômetro pausado');

}

function Clean() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerHTML = '00:00:00'
    interval = null;

    console.log('Cronômetro resetado');
}
