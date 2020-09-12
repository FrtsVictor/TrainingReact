const container = document.querySelector('.container');

let timerP = document.createElement('h3');
timerP.className = 'timer';
timerP.textContent = '00:00:00';

let divButtons = document.createElement('div');
divButtons.className = 'buttons'

let h1 = document.createElement('h1');
h1.textContent = 'Timer :D';

createButton('start', start);
createButton('stop', pause);
createButton('clear', stops);

container.appendChild(h1);
container.appendChild(timerP);
container.appendChild(divButtons);


function createButton(name, funcao) {
    let newButton = document.createElement('button');
    newButton.className = name;
    newButton.textContent = name;
    newButton.onclick = funcao
    divButtons.appendChild(newButton)
}


let hour = 0;
let min = 0;
let second = 0;
let temp = 1000;
let timerC;


function formatarHora() {

    let seconds = second < 10 ? `0${second}` : second;
    let minutes = min < 10 ? `0${min}` : min;
    let hours = hour < 10 ? `0${hour}` : hour

    let hourFormated = `${hours}:${minutes}:${seconds}`

    return timerP.innerText = hourFormated
}


function pause() {
    clearInterval(timerC)
    timerP.classList.remove('started')
    timerP.className = 'stopped'
    ligado = false
}


let ligado = false;

function start() {
    
    timerP.classList.remove('stop')
    timerP.className = 'started'

    if(!ligado){
        timerC = setInterval(() => {
            ligado = true
            timer();
        }, temp);
        }

}


function stops(){
    clearInterval(timerC)
    hour=0;
    min=0;
    second=0
    formatarHora()
    timerP.classList.remove('started')
    timerP.classList.remove('stopped')
   
}

function timer() {
    second++

    if (second == 60) {
        second = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hour++;
    }
    formatarHora()
}




