// criando variaveis para as manipular dentro das funções definidas adiante
var display = document.getElementById('display');
var interval;
var seconds = 0;
var minutes = 0;
var hours = 0;
var interval = null;


/* função para incrementar '0' ao elementos númericos do crônometro que forem menores
 que 10 */
function Zero(number) {
    if (number < 10) {
        return ('0' + number)
    } else {
        return (number)
    }
}

/* A função Count() irá incrementar os segundos, minutos e horas, com condições 
definidas de forma a simular uma contagem de tempo. Essa função é executada
 em intervalo de 1 segundo através função global setInterval(), sendo essa ultima 
 chamada pela função Start(). */
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
outra contagem sendo executada no momento (através da condição de a variavel interval
 ser nula) para então iniciar de fato uma contagem */
function Start() {
    if (interval === null) {
        interval = setInterval(Count, 1000);
        console.log('Cronômetro iniciado');
    }
}

/* A Função Pause() será executada quando o botão 'Pause' for clicado, ela chamará a 
função Clearinterval() que interromperá a contagem, no entanto sem zerar os valores de 
tempo. Além disso, anulará o valor da variavel i

 */
function Pause() {
    clearInterval(interval);
    interval = null;
    console.log('Cronômetro pausado');
}

/* A função Reset() é chamada ao clicar no botão 'Reset' e executará o interrompimento 
da contagem assim como o Pause(), no entanto, além disso, irá zerar os valores de segundos,
 minutos e horas para próxima contagem ser iniciada do zero, também irá zerar o atual 
 display, por fim, irá anular o valor da variavel interval para que possa ser iniciado uma
  nova contagem através do botão 'Start' */
function Reset() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    interval = null;
    display.innerHTML = '00:00:00';
    console.log('Cronômetro resetado');
}
