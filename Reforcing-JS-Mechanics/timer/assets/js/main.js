
(() => {





    let hour = 0;
    let min = 0;
    let second = 0;
    let temp = 1000;
    let on = false;
    let timerC;

    function formatHour() {

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
        on = false
    }



    function start() {
        timerP.classList.remove('stop')
        timerP.className = 'started'

        if (!on) {
            timerC = setInterval(() => {
                on = true
                timer();
            }, temp);
        }
    }


    function stops() {
        clearInterval(timerC)
        hour = 0;
        min = 0;
        second = 0
        formatHour()
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
        return formatHour()
    }

})()  