(() => {

    const container = document.querySelector('.container');

    let timerP = document.createElement('h3');
    timerP.classList.add('timer');
    timerP.textContent = '00:00:00';

    let divButtons = document.createElement('div');
    divButtons.classList.add('buttons');

    let h1 = document.createElement('h1');
    h1.textContent = 'Timer :D';

    createButton('start');
    createButton('stop');
    createButton('clear');

    container.appendChild(h1);
    container.appendChild(timerP);
    container.appendChild(divButtons);

    function createButton(name, funcao) {
        let newButton = document.createElement('button');
        newButton.classList.add(name);
        newButton.textContent = name.replace(name[0], name[0].toUpperCase());
        divButtons.appendChild(newButton)
    }
})()
